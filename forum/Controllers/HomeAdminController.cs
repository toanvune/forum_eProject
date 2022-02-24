using forum.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using X.PagedList;

namespace forum.Controllers
{
    [Route("homeadmin")]
    public class HomeAdminController : Controller
    {
        private DatabaseContext db;

      
        private IWebHostEnvironment webHostEnvironment;

        public HomeAdminController(DatabaseContext _db, IWebHostEnvironment _webHostEnvironment)
        {
            db = _db;
            webHostEnvironment = _webHostEnvironment;
           
        }
        

        [Route("index")]
        public IActionResult Index(Account account)
        {
            var obj = db.Accounts.SingleOrDefault(a => a.UserName.Equals(account.UserName));
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }
            return View();

            HttpContext.Session.SetInt32("id", obj.Id);
            HttpContext.Session.SetString("username", obj.UserName);
            HttpContext.Session.SetString("fullname", obj.FullName);
            HttpContext.Session.SetString("photo", obj.Photo);
            HttpContext.Session.SetInt32("role", obj.Role.Value);

        }

        [Route("information")]
        [HttpGet]
        public ActionResult Information(int id)
        {
            try
            {
                var user = HttpContext.Session.GetString("username");
                var a = db.Accounts.Where(i => i.UserName == user).Select(x => x.FullName);
                var fullname = "";
                foreach (var item in a)
                {
                    fullname = item;

                }
                ViewBag.fullname = fullname;
                var account = db.Accounts.Find(id);

                if (account == null)
                {
                    return View("Notfound");
                }
                return View("Information", account);
            }
            catch (Exception ex)
            {

                return View("Notfound");
            }


        }



        


        [Route("changepass")]
        [HttpGet]
        public ActionResult ChangePass()
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }


            if (HttpContext.Session.GetString("Email") != null)
            {
                var id = HttpContext.Session.GetString("IdAdmin");
                var account = db.Accounts.Find(id);
                var Change = new Account()
                {
                    Id = Convert.ToInt32(id)
                };
                return View(Change);
            }
            else
            {
                return RedirectToAction("Login", "Admin");
            }
        }

        [Route("changepass")]
        [HttpPost]
        public ActionResult ChangePassword(Account changePass)
        {
            var obj = db.Accounts.SingleOrDefault(a => a.Id.Equals(changePass.Id));
            var checkPassword = BCrypt.Net.BCrypt.Verify(changePass.PassHash, obj.PassHash);
            if (checkPassword)
            {
                obj.PassHash = BCrypt.Net.BCrypt.HashPassword(changePass.PassHash);
                db.Entry(changePass).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                db.SaveChanges();
                TempData["Message"] = "Change password successfully";
                return RedirectToAction("Index", "Homeadmin");
            }
            else
            {
                ViewBag.Error = "Wrong old password";
                return View();
            }
        }



        [Route("member")]
        [HttpGet]
        public ActionResult Member(string Search, int? i)
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }
            Search = Search ?? "";

            var listaccount = db.Accounts.Where(s => s.FullName.Contains(Search) || s.UserName.Contains(Search) || s.Email.Contains(Search) || Search == null && s.Role != 1).OrderBy(i => i.FullName).ToPagedList(i ?? 1, 5);

            var acc = listaccount.Select(x => new Account
            {
                Id = x.Id,
                FullName = x.FullName,
                Mobile = x.Mobile,
                Address = x.Address,
                Email = x.Email,
                UserName = x.UserName,
                Birthday = x.Birthday,
                Gender = x.Gender,
                //Photo = x.Photo,                                    
            }).ToList();

            return View("Member", listaccount);


            //}
            //else
            //{
            //    //return RedirectToAction("Login", "Home");
            //    return View("Member");
            //}

        }

        [Route("deletemember")]
        public ActionResult DeleteMember(int id)
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }
            var acc = db.Accounts.Where(p => p.Id == id);
            var post = db.Posts.Where(z => z.AccId == id).ToList();

            var accnoti = db.AccountNotifications.Where(n => n.AccId == id).ToList();

            var com = from p in db.Posts
                      join c in db.Comments on p.Id equals c.PostId
                      where p.AccId == id || c.AccId == id
                      select c;






            db.AccountNotifications.RemoveRange(accnoti);
            db.Comments.RemoveRange(com);
            db.Posts.RemoveRange(post);
            db.Accounts.RemoveRange(acc);

            db.SaveChanges();
            return RedirectToAction("Member", "Homeadmin");
        }

        [Route("specialize")]
        [HttpGet]
        public ActionResult Specialize(string Search, int? i)
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }
            Search = Search ?? "";
            var listSpecialize = db.Specializes.Where(i => i.Status == false).Where(s => s.SpecializeName.Contains(Search)).OrderBy(i => i.Description).ToPagedList(i ?? 1, 5);
            //var acc = listSpecialize.Select(x => new Specialize
            //{
            //    SpecializeName = x.SpecializeName,
            //    Description = x.Description
                
            //}).ToList();

            return View(listSpecialize);
            //}
            //else
            //{
            //    //return RedirectToAction("Login", "Admin");
            //    return View("Specialize");
            //}

        }

        [Route("newspecialize")]
        [HttpGet]
        public ActionResult NewSpecialize()
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }
           
                return View("NewSpecialize", new Specialize());
           

        }

        [Route("newspecialize")]
        [HttpPost]
        public ActionResult NewSpecialize(Specialize specialize)
        {

            //var spe = (from s in db.Specializes
            //           select s).FirstOrDefault();

            if(ModelState.IsValid)
            {
                specialize.Status = false;
                    
                db.Specializes.Add(specialize);
                db.SaveChanges();
                return RedirectToAction("Specialize", "Homeadmin");
            }

            return View(specialize);


        }


        [Route("updatespecialize/{id}")]
        [HttpGet]
        public ActionResult UpdateSpecialize(int id)
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }
            //if (HttpContext.Session.GetString("Email") != null)
            //{

            var specialize = db.Specializes.Find(id);
            var Spe = new Specialize()
            {
                Id = specialize.Id,
                SpecializeName = specialize.SpecializeName,
                Description = specialize.Description,


            };
            return View(Spe);

            //}
            //else
            //{
            //    //return RedirectToAction("Login", "Home");
            //    return View("UpdateSpecialize");
            //}

        }

        [Route("updatespecialize/{id}")]
        [HttpPost]
        public ActionResult UpdateSpecialize(Specialize specialize)
        {
            var spe = db.Specializes.SingleOrDefault(a => a.Id.Equals(specialize.Id));

            if (ModelState.IsValid)
            {

                
                spe.SpecializeName = specialize.SpecializeName;
                spe.Description = specialize.Description;

                specialize.Status = true;


                db.SaveChanges();
                return RedirectToAction("Specialize", "Homeadmin");
            }

            return View(specialize);
        }                               
        [Route("deletespecialize")]
        public ActionResult DeleteSpecialize(int id)
        {

            var spe = db.Specializes.Where(p => p.Id == id);
            var top = db.Topics.Where(p => p.SpecializeId == id);

            var post = from t in db.Topics
                       join p in db.Posts on t.Id equals p.TopicId
                       where t.SpecializeId == id
                       select p;

            var com = from p in db.Posts
                      join c in db.Comments on p.Id equals c.PostId
                      where p.Topic.SpecializeId == id
                      select c;

           
            //spe.Status = false;
            //db.Entry(spe).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            //db.SaveChanges();
            db.Specializes.RemoveRange(spe);
            db.Topics.RemoveRange(top);
            db.Posts.RemoveRange(post);
            db.Comments.RemoveRange(com);
            db.SaveChanges();


            return RedirectToAction("Specialize", "Homeadmin");
        }


        [Route("topic")]
        [HttpGet]
        public ActionResult Topic(string Search, int? i)
        {
            //if (HttpContext.Session.GetString("Email") != null)
            //{

            var listtopic = db.Topics.Where(s => s.TopicName.Contains(Search ?? "")).OrderBy(i => i.TopicName).ToPagedList(i ?? 1, 5);


            return View("Topic", listtopic);

            //}
            //else
            //{
            //    //return RedirectToAction("Login", "Home");
            //    return View("Login");
            //}

        }


        [Route("newtopic")]
        [HttpGet]
        public ActionResult NewTopic()
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }

          
                //Topic top = new Topic();


                //ViewBag.Specializelist = new SelectList(top.specializes, "Id", "SpecializeName"); 

                ViewBag.x = db.Specializes.ToList();

                //ViewBag.x = new SelectList(x, "Id", "Content");

                return View(new Topic());

                //return View("NewTopic", new Topic());

           
        }



        [Route("newtopic")]
        [HttpPost]
        public ActionResult NewTopic(Topic topic)
        {

            if (ModelState.IsValid)
            {
                

                db.Topics.Add(topic);
                db.SaveChanges();
                return RedirectToAction("Topic");
            }
            ViewBag.x = db.Specializes.ToList();
            return View(topic);


        }


        [Route("updatetopic/{id}")]
        [HttpGet]
        public ActionResult UpdateTopic(int id)
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }
            //    if (HttpContext.Session.GetString("Email") != null)
            //    {

            var topic = db.Topics.Find(id);
            var top = new Topic()
            {
                Id = topic.Id,
                Description = topic.Description,
                TopicName = topic.TopicName,
                SpecializeId = topic.SpecializeId,
            };

            List<Specialize> list = db.Specializes.ToList();
            List<Specialize> spe = list.Select(x => new Specialize
            {
                Id = x.Id,
                Description = x.Description,

            }).ToList();

            ViewBag.x = db.Specializes.ToList();
            ViewBag.Specializelist = new SelectList(spe, "Id", "SpecializeName");
            return View(top);

            //}
            //else
            //{
            //    return RedirectToAction("Login", "Home");
            //}

        }

        [Route("updatetopic/{id}")]
        [HttpPost]
        public ActionResult UpdateTopic(Topic topic)
        {
            var top = db.Topics.SingleOrDefault(a => a.Id.Equals(topic.Id));
            ViewBag.x = db.Specializes.ToList();
            if (ModelState.IsValid)
            {
                top.Id = topic.Id;
                top.TopicName = topic.TopicName;
                top.Description = topic.Description;
                top.SpecializeId = topic.SpecializeId;
                db.SaveChanges();

                //TempData["Message"] = "You are not authorized.";
                return RedirectToAction("Topic", "Homeadmin");
            }
            
            return View(topic);
        }

        [Route("deletetopic")]
        public ActionResult DeleteTopic(int id)
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }
            var top = db.Topics.Where(p => p.Id == id);
            var post = db.Posts.Where(z => z.TopicId == id).ToList();

            var com = from p in db.Posts
                      join c in db.Comments on p.Id equals c.PostId
                      where p.TopicId == id
                      select c;







            db.Comments.RemoveRange(com);
            db.Posts.RemoveRange(post);
            db.Topics.RemoveRange(top);
            db.SaveChanges();
            return RedirectToAction("Topic", "HomeAdmin");
        }

        [Route("post")]
        [HttpGet]
        public ActionResult Post(string keyword, int? page)
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }
            int pageSize = 4;
            int pageNumber = (page ?? 1);
            keyword = (keyword ?? "");
            ViewBag.PageCurrent = page;

            return View(db.Posts.Where(i => i.StatusBlock == false).Where(i => i.PostName.Contains(keyword) || i.Acc.FullName.Contains(keyword)).OrderByDescending(i => i.CreatedAt).ToPagedList(pageNumber, pageSize));
          


        }

        [Route("deletepost/{id}")]
        public ActionResult DeletePost(int id)
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }
            var post = db.Posts.Where(p => p.Id == id);
            var com = db.Comments.Where(z => z.PostId == id).ToList();





            db.Comments.RemoveRange(com);
            db.Posts.RemoveRange(post);

            db.SaveChanges();

            return RedirectToAction("Post", "HomeAdmin");
        }

       
        [Route("acceptpost/{id}")]
        public ActionResult AcceptPost(int id)
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }
            var post = db.Posts.Find(id);
           if(post != null)
            {
                post.StatusBlock = true;
                post.UpdatedAt = DateTime.Now;
                 
                var p = db.Posts.Find(post.Id);
                p.Id = post.Id;
                p.AccId = post.AccId;
                p.TopicId = post.TopicId;
                p.PostName = post.PostName;
                p.StatusBlock = post.StatusBlock;
                p.CreatedAt = post.CreatedAt;
                p.UpdatedAt = post.UpdatedAt;
                p.Content = post.Content;
                db.Entry(p).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Post");
            }
            return View(post);
        }
        [Route("acceptAllpost")]
        [HttpPost]
        public ActionResult AcceptAllPost()
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");

            }
            if (db.Accounts.SingleOrDefault(a => a.UserName == HttpContext.Session.GetString("username")).Role != 1)
            {
                return RedirectToAction("Index", "Home");
            }
            var posts = db.Posts.Where(i => i.StatusBlock == false);
            if (posts != null)
            {
                foreach(var post in posts)
                {
                    post.StatusBlock = true;
                    post.UpdatedAt = DateTime.Now;

                    var p = db.Posts.Find(post.Id);
                    p.Id = post.Id;
                    p.AccId = post.AccId;
                    p.TopicId = post.TopicId;
                    p.PostName = post.PostName;
                    p.StatusBlock = post.StatusBlock;
                    p.CreatedAt = post.CreatedAt;
                    p.UpdatedAt = post.UpdatedAt;
                    p.Content = post.Content;
                    db.Entry(p).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                    
                   
                }
                db.SaveChanges();
                return RedirectToAction("Post");
            }
            ViewBag.thongbao = "Failed";
            return View("Post");
        }


        
    }
}
