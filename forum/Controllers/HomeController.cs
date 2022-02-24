using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using forum.Models;

using X.PagedList;
using X.PagedList.Mvc.Core;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace forum.Controllers
{
    [Route("home")]
    public class HomeController : Controller
    {

        
        private DatabaseContext db;

        public HomeController(DatabaseContext _db)
        {

            
            db = _db;
        }

        [Route("~/")]
        [Route("")]
        [Route("index")]
        public IActionResult Index(int? page, string keyword)
        {

            int pageSize = 3;
            int pageNumber = (page ?? 1);
            keyword = (keyword ?? "");
            ViewBag.PageCurrent = pageNumber;
            ViewBag.topic = db.Topics.ToList();

            return View(db.Posts.Where(i => i.StatusBlock == true).Where(i=> i.PostName.Contains(keyword) || i.Acc.FullName.Contains(keyword)).OrderByDescending(i => i.CreatedAt).ToPagedList(pageNumber, pageSize));

        }

        [Route("topic/{id}")]
        public IActionResult Topic(int id, int? page)
        {

            int pageSize = 3;
            int pageNumber = (page ?? 1);
            ViewBag.PageCurrent = pageNumber;
            ViewBag.topic = db.Topics.ToList();
            return View(db.Posts.Where(i => i.StatusBlock == true).Where(i => i.TopicId == id).OrderByDescending(i => i.CreatedAt).ToPagedList(pageNumber, pageSize));

        }

        [HttpGet]
        [Route("detail/{id}")]
        public IActionResult Detail(int id, int? page)
        {
            try
            {
            
               
                var post = db.Posts.Find(id);
                if (post == null)
                {
                    return View("Notfound");
                }
                ViewBag.lastest = db.Posts.OrderByDescending(i => i.CreatedAt).ToList();
                return View("detail", post);
            }
            catch (Exception)
            {

                return View("Notfound");
            }
            





        }



        [Route("create")]
        [HttpGet]
        public IActionResult Create()
        {
            var user = HttpContext.Session.GetString("username");
            if (string.IsNullOrEmpty(user))
            {
                return RedirectToAction("login","account");
            }
            //ViewBag.Specialize = db.Specializes.ToList();
            ViewBag.Topic = db.Topics.ToList();
            return View("Create", new Post());
        }

        [Route("create")]
        [HttpPost]
        public async Task<IActionResult> Create(Post post)
        {
            var user = HttpContext.Session.GetString("username");
            //if (string.IsNullOrEmpty(user))
            //{
            //    return RedirectToAction("login", "account");
            //}
            var uid = db.Accounts.SingleOrDefault(a => a.UserName == user).Id;

            if (ModelState.IsValid)
            {
                post.StatusBlock = false;
                post.CreatedAt = DateTime.Now;
                post.UpdatedAt = DateTime.Now;
                post.AccId = uid;
                db.Posts.Add(post);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            
            //ViewBag.Specialize = db.Specializes.ToList();
            ViewBag.Topic = db.Topics.ToList();
            return View(post);
        }

        [Route("update/{id}")]
        [HttpGet]
        public IActionResult Update(int id)
        {
            var user = HttpContext.Session.GetString("username");
            if (string.IsNullOrEmpty(user))
            {
                return RedirectToAction("login", "account");
            }
            
            var post = db.Posts.Find(id);
            if(post == null)
            {
                return View("Notfound");
            }
            if (!post.AccId.Equals(HttpContext.Session.GetInt32("id")))
            {
                return View("Notfound");
            }
            ViewBag.Specialize = db.Specializes.ToList();
            ViewBag.Topic = db.Topics.ToList();
            return View(post);
        }

        [Route("update/{id}")]
        [HttpPost]
        public IActionResult Update(Post post)
        {
            var p = db.Posts.Find(post.Id);
            if (post.Content == string.Empty || post.Content == null)
                ModelState.AddModelError("Content", "Content can not be empty.");
            //if (post.Content.Length <= 50 && post.Content != null)
            //    ModelState.AddModelError("Content", "Content can not less than 50 characters.");
            if (!post.PostName.Equals(p.PostName))
                if (db.Posts.SingleOrDefault(x => x.PostName.Equals(post.PostName)) != null)
                    ModelState.AddModelError("PostName", "This post name already exists.");
            if (ModelState.IsValid)
            {

                p.PostName = post.PostName;
                p.TopicId = post.TopicId;
                p.UpdatedAt = DateTime.Now;
                p.Content = post.Content;
                db.Entry(p).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("detail", "home", new { id = p.Id});
            }
            ViewBag.Specialize = db.Specializes.ToList();
            ViewBag.Topic = db.Topics.ToList();
            return View(post);

        }

        [Route("delete")]
        public async Task<IActionResult> Delete(int id)
        {
            var user = HttpContext.Session.GetString("username");
            if (string.IsNullOrEmpty(user))
            {
                return RedirectToAction("login", "account");
            }
            var post = db.Posts.Find(id);
            if (HttpContext.Session.GetInt32("role") != 1)
            {
                if(!user.Equals(post.Acc.UserName))
                {
                    return RedirectToAction("detail", "home", new { id = id });
                }
            }

                if(post != null)
                {
                    db.Comments.RemoveRange(db.Posts.Find(id).Comments.ToList());
                    db.Posts.Remove(db.Posts.Find(id));
                    await db.SaveChangesAsync();
                    return RedirectToAction("index");
                }
            
            return View("Notfound");
        }

    }
}

