using forum.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using X.PagedList;
using X.PagedList.Mvc.Core;

namespace forum.Controllers
{
    [Route("comment")]
    public class CommentController : Controller
    {
        private DatabaseContext db;
        
        public CommentController(DatabaseContext _db)
        {
            db = _db;
           
        }

        public PartialViewResult GetComment(int postId, int? page)
        {
            var pageNumber = page ?? 1;
            var pageSize = 5;
            var cmt = db.Comments.Where(i => i.PostId == postId).OrderByDescending(i => i.CreatedAt).ToList();/*.ToPagedList(pageNumber, pageSize);*/
            return PartialView("Comment", cmt);
        }

        public PartialViewResult CommentChild(int parentId)
        {
            var cmt = db.Comments.Where(x => x.ParentId.Equals(parentId)).OrderBy(x => x.CreatedAt).ToList();
            return PartialView(cmt);
        }
        
        [Route("create")]
        [HttpPost]
        public async Task<IActionResult> Create(Comment cmt)
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");
            }
            if (cmt == null)
            {
                ModelState.AddModelError(string.Empty, "Not apply with out comment");
            }
            //if(id == null)
            //{
            //    ModelState.AddModelError(string.Empty, "Not apply with out post");
            //}
            if (ModelState.IsValid)
            {
                cmt.AccId = HttpContext.Session.GetInt32("id"); ;
                //cmt.PostId = post.Id;
                //cmt.ParentId = cmt.ParentId;
                cmt.CreatedAt = DateTime.Now;
                
                db.Comments.Add(cmt);
                await db.SaveChangesAsync();
                
                if (cmt.ParentId == null)
                {
                    PostGetComment(cmt.PostId, cmt.Id, "http://localhost:62855", (int)HttpContext.Session.GetInt32("id"));
                    
                }
                else
                {
                    CommentGetReply(cmt.ParentId, cmt.Id, "http://localhost:62855", (int)HttpContext.Session.GetInt32("id"));
                }
                return RedirectToAction("Detail", "home", new { id = cmt.PostId});
            }
            return View("~/Views/Home/Index.cshtml");
            
        }

        [Route("edit")]
        [HttpPost]
        public IActionResult Edit(Comment cmt)
        {
            if (HttpContext.Session.GetString("username") == null)
            {
                return RedirectToAction("Login", "Account");
            }
            if (cmt == null)
            {
                ModelState.AddModelError(string.Empty, "Not apply with out comment");
            }
            var comment = db.Comments.Find(cmt.Id);
            if (ModelState.IsValid)
            {
                comment.Content = cmt.Content;
                db.Entry(comment).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Detail", "home", new { id = comment.PostId });
            }
            return RedirectToAction("Detail", "home", new { id = cmt.PostId});

        }

        [Route("delete/{id}")]
        public async Task<IActionResult> Delete (int id)
        {
            var user = HttpContext.Session.GetString("username");
            if (string.IsNullOrEmpty(user))
            {
                return RedirectToAction("login", "account");
            }

            var cmt = db.Comments.Find(id);
            if (cmt == null)
            {
                return View("Notfound");
            }
            if (HttpContext.Session.GetInt32("role") != 1)
            {
                if (!user.Equals(cmt.Acc.UserName))
                {
                    return RedirectToAction("Detail", "home", new { id = cmt.PostId });
                }
            }
            
            db.Comments.RemoveRange(db.Comments.Where(i => i.ParentId == cmt.Id).ToList());
            db.Comments.Remove(cmt);
            await db.SaveChangesAsync();
            return RedirectToAction("detail", "home", new { id = cmt.PostId});
        }
        //Create notification post new comment
        public void PostGetComment(int? postid, int? cmtid, string urlShema, int uid)
        {
            if (postid != null &&  cmtid != null )
            {
                var user = db.Accounts.Find(uid);
                var post = db.Posts.Find(postid);
                
                Notification not = new Notification();
                not.Title = user.FullName + " commented on the post " ;
                not.Url = urlShema + "/home/detail/" + postid;
                not.Created = DateTime.Now;
                db.Notifications.Add(not);
                db.SaveChanges();

                List<int> userid = new List<int>();
                if (uid != post.AccId)
                {
                    userid.Add(post.AccId);
                }
                foreach (var cmt in post.Comments)
                {
                    if (cmt.AccId == uid)
                    {
                        continue;
                    }
                    if(cmt.AccId == post.AccId)
                    {
                        continue;
                    }
                    if (userid.Equals((int)cmt.AccId))
                    {
                        continue;
                    }
                    userid.Add((int)cmt.AccId);
                }
                SendNotification(not.Id, userid);
            }
        }



        //Create notification comment new reply
        public void CommentGetReply(int? parent, int? cmtid, string urlShema, int uid)
        {
            if (parent != null && cmtid != null)
            {
                var comment = db.Comments.Find(parent);
                var post = db.Posts.Find(comment.PostId);
                
                var not = new Notification();
                
                not.Title = HttpContext.Session.GetString("fullname") + " reply a comment in the post";
                not.Url = urlShema + "/home/detail/" + comment.PostId;
                not.Created = DateTime.Now;
                
                
                db.Notifications.Add(not);
                db.SaveChanges();

                List<int> userid = new List<int>();
                if (uid != comment.AccId)
                {
                    userid.Add((int)comment.AccId);
                }
                foreach (var cmt in db.Comments.Where(x => x.ParentId.Equals(parent)).ToList())
                {
                    if (cmt.AccId == uid)
                    {
                        continue;
                    }
                    if (userid.Equals((int)cmt.AccId))
                    {
                        continue;
                    }
                    userid.Add((int)cmt.AccId);
                }  
                SendNotification(not.Id, userid);
                //PostGetCommentReply(comment.PostId,cmtid, not.Url, uid);


            }
        }
        // Create a comment to notify the new reply and create a message for the post owner to know
        public void PostGetCommentReply(int? postid, int? cmtid, string urlShema, int uid)
        {
            if (postid != null && cmtid != null)
            {
                var user = db.Accounts.Find(uid);
                var post = db.Posts.Find(postid);

                Notification not = new Notification();
                not.Title = user.FullName + " commented on the post ";
                not.Url = urlShema;
                not.Created = DateTime.Now;
                db.Notifications.Add(not);
                db.SaveChanges();

                List<int> userid = new List<int>();
                if (uid != post.AccId)
                {
                    userid.Add(post.AccId);
                }
                foreach (var cmt in post.Comments)
                {
                    if (cmt.AccId == uid)
                    {
                        continue;
                    }
                    if (userid.Equals((int)cmt.AccId))
                    {
                        continue;
                    }
                    userid.Add((int)cmt.AccId);
                }
                SendNotification(not.Id, userid);
            }
        }

        public void SendNotification(int notId, List<int> userid)
        {
            var List = new List<AccountNotification>();
            foreach (var id in userid)
            {
                var un = new AccountNotification();
                un.NotificationId = notId;
                un.AccId = id;
                un.Status = false;
                List.Add(un);
            }
            db.AccountNotifications.AddRange(List);
            db.SaveChanges();
        }
    }
}
