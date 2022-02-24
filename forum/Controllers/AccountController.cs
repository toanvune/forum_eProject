using forum.Helpers;
using forum.Models;
using forum.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using X.PagedList;

namespace forum.Controllers
{
    [Route("account")]
    public class AccountController : Controller
    {
        private DatabaseContext db;
        private AccountService accountService;
        private IWebHostEnvironment webHostEnvironment;


        public AccountController(DatabaseContext _db, AccountService _accountService, IWebHostEnvironment _webHostEnvironment)
        {
            db = _db;
            accountService = _accountService;
            webHostEnvironment = _webHostEnvironment;
        }

        [Route("login")]
        public IActionResult Login()
        {
            return View("Login");
        }
        [Route("login")]
        [HttpPost]

        public IActionResult Login(Account account)
        {
            var obj = db.Accounts.SingleOrDefault(a => a.UserName.Equals(account.UserName));
            if (obj == null)
            {
                ViewBag.Error = "Username does not existed.";
                //ModelState.AddModelError("UserName", "Username does not existed.");
            }
            else
            {
                if (account.PassHash == null)
                {
                    ViewBag.Error = "Please enter a password";
                }
                else
                {

                    if (!BCrypt.Net.BCrypt.Verify(account.PassHash, obj.PassHash))
                    //if (!obj.PassHash.Equals(account.Password))
                    {
                        ViewBag.Error = "Password is incorrect.";

                    }
                    else
                    {
                        if (obj.RegistrationStatus == true)
                        {
                            if (obj.StatusBlock == true)
                            {
                                ViewBag.Error = "Your account has been banned, please contact the administrator for more details.";

                            }
                            else
                            {
                                HttpContext.Session.SetInt32("id", obj.Id);
                                HttpContext.Session.SetString("username", obj.UserName);
                                HttpContext.Session.SetString("fullname", obj.FullName);
                                HttpContext.Session.SetString("photo", obj.Photo);
                                HttpContext.Session.SetInt32("role", obj.Role.Value);
                                if (obj.Role == 2)
                                {
                                    return RedirectToAction("index", "home");
                                }
                                else
                                {
                                    return RedirectToAction("index", "homeadmin");
                                }
                            }
                        }
                        else
                        {
                            ViewBag.Error = "Your account has not been confirmed, please check your email to confirm";
                            return RedirectToAction("confirm", "account");
                        }



                    }
                }
            }
            return View("login");
        }

        /// //////////////////////////////////////////////////////////////////////////////
        // Register Account
        [Route("signup")]
        [HttpGet]
        public IActionResult Signup()
        {
            return View("signup", new Account());
        }
        [Route("signup")]

        [HttpPost]
        public IActionResult Signup(Account account)
        {
            try
            {
                //check user
                var checkUsername = db.Accounts.FirstOrDefault(a =>
                a.UserName.Equals(account.UserName.Trim()));
                var checkEmail = db.Accounts.FirstOrDefault(a => a.Email.Equals(account.Email.Trim()));
                var checkPhone = db.Accounts.FirstOrDefault(a => a.Mobile.Equals(account.Mobile.Trim()));
                if (checkUsername == null)
                {
                    if (checkEmail == null)
                    {
                        if (checkPhone == null)
                        {
                            if (DateTime.Now.Year - account.Birthday.Year < 18)
                            {
                                ModelState.AddModelError("Birthday", "you are under 18 years old");
                            }
                            if (DateTime.Now.Year - account.Birthday.Year > 120)
                            {
                                ModelState.AddModelError("Birthday", "you are too old");
                            }
                            if (ModelState.IsValid)
                            {

                                account.PassHash = BCrypt.Net.BCrypt.HashString(account.PassHash).Trim();
                                account.StatusBlock = false;
                                account.Active = false;
                                account.RegistrationStatus = false;
                                account.Role = 2;
                                db.Accounts.Add(account);

                                db.SaveChanges();
                                ViewBag.thongbao = "Sign Up Success";
                                return View("Confirm");
                            }
                            else
                            {
                                ViewBag.thongbao = "Please enter the correct format";
                                return View("signup", account);
                            }
                        }
                        else
                        {
                            ViewBag.thongbao = "Phone number already exists";
                            return View("signup", account);
                        }

                    }
                    ViewBag.thongbao = "Email already exists";
                    return View("signup", account);
                }
                else
                {
                    ViewBag.thongbao = "User already exists";
                    return View("signup", account);
                }

            }
            catch (Exception e)
            {
                //Debug.WriteLine("Signup Failed: " + e.InnerException.Message);
                ViewBag.thongbao = "Something went wrong. Please try again";
                return View("signup", account);
            }
        }

        //Confirm
        [Route("confirm")]
        [HttpGet]
        public IActionResult Comfirm()
        {
            return View("Confirm", new Account());
        }
        [Route("Confirm")]
        [HttpPost]
        public IActionResult Comfirm(Account accountObject)
        {
            try
            {
                var p = db.Accounts.Find(accountObject.Id);
                var account = db.Accounts.SingleOrDefault(a => a.UserName.Equals(accountObject.UserName)
                && a.Email.Equals(accountObject.Email));

                if (account != null)
                {

                    Generator generator = new Generator();
                    var accountFrom = db.Helps.Find(2);


                    var from = accountFrom.Email;
                    var password = "01863678399";

                    var subject = "Confirm sign up";
                    var name = "Forum_Doctor";

                    var otp = generator.GenerateOtp();

                    var body = "This is a new password " + otp + ". Now login with this password and you should change your password";
                    MailHelper mail = new MailHelper();
                    mail.Send(name, from, password, account.FullName, account.Email, subject, body);
                    account.PassHash = BCrypt.Net.BCrypt.HashPassword(otp);
                    account.RegistrationStatus = true;
                    db.SaveChanges();
                    ViewBag.Success = "Please check email";
                    return View("Confirm");
                }
                else
                {
                    ViewBag.Failed = "Email or Username invalid";
                    return View("confirm");
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine("Forgot password Failed: " + e.Message);
                return View("confirm");
            }


        }

      

        [Route("Changepass")]
        [HttpGet]
        public IActionResult Changpass()
        {
            return View("Changepass", new Account());
        }

        [Route("Changepass")]
        [HttpPost]
        public IActionResult Changpass(Account account, string oldpass, string newpass, string confirmpass)
        {
            var user = HttpContext.Session.GetString("username");
            var currentAccount = accountService.Find(user);
            if (oldpass != null)
            {
                if (BCrypt.Net.BCrypt.Verify(oldpass, currentAccount.PassHash.Trim()))
                {
                    if (newpass.Trim() != confirmpass.Trim())
                    {
                        ViewBag.failed = "The new pass and confirm pass do not match";
                        return View("Changepass");
                    }
                    else
                    {
                        currentAccount.PassHash = BCrypt.Net.BCrypt.HashString(newpass.Trim());
                        db.SaveChanges();
                        ViewBag.success = "Change pass succcess";
                        return View("Changepass");
                    }
                }
                else
                {
                    ViewBag.failed = "wrong old password";
                    return View("Changepass");
                }

            }
            ViewBag.failed = "Please enter old password";
            return View("Changepass");

        }

        // forgot-password

        [Route("forgot-password")]
        [HttpGet]
        public IActionResult ForgotPassword()
        {

            return View("ForgotPassword");
        }
        [Route("forgot-password")]
        [HttpPost]
        public IActionResult ForgotPassword(Account accountObject)
        {
            try
            {
                var account = db.Accounts.SingleOrDefault(a => a.UserName.Equals(accountObject.UserName)
                && a.Email.Equals(accountObject.Email));

                if (account != null)
                {

                    Generator generator = new Generator();
                    var accountFrom = db.Helps.Find(2);


                    var from = accountFrom.Email;
                    var password = "01863678399";

                    var subject = accountFrom.Subject;
                    var name = "Forum_Doctor";

                    var otp = generator.GenerateOtp();
                    var body = "This is new password " + otp + ". Now, you can submit this password when you want to login.Please dont't share this password with anyone.";
                    MailHelper mail = new MailHelper();
                    mail.Send(name, from, password, account.FullName, account.Email, subject, body);
                    account.PassHash = BCrypt.Net.BCrypt.HashPassword(otp);
                    db.SaveChanges();
                    ViewBag.resetPasswordSuccess = "Please check gmail for password";
                    return View("ForgotPassword");
                }
                else
                {
                    ViewBag.resetPasswordFailed = "Email or Username invalid";
                    return View("ForgotPassword");
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine("Forgot password Failed: " + e.Message);
                return View("ForgotPassword");
            }


        }


        [HttpGet]
        [Route("profile")]
        public IActionResult ProfileId(/*[FromQuery(Name = "id")]*/ int id)
        {
            try
            {
                var user = HttpContext.Session.GetString("username");
                var a = db.Accounts.Where(i => i.UserName == user ).Select(x => x.FullName);
                var fullname = "";
                foreach (var item in a)
                {
                    fullname = item;

                }
                ViewBag.fullname = fullname;
                var account = accountService.Find(id);

                if (account == null)
                {
                    return View("Notfound");
                }
                return View("ProfileId", account);
            }
            catch (Exception ex)
            {

                return View("Notfound");
            }

        }
        [Route("editprofile")]
        [HttpGet]
        public IActionResult EditProfile()
        {
            var user = HttpContext.Session.GetString("username");
            var a = db.Accounts.Where(i => i.UserName == user).Select(x => x.FullName);
            var fullname = "";
            foreach (var item in a)
            {
                fullname = item;

            }
            ViewBag.fullname = fullname;
            var account = accountService.Find(HttpContext.Session.GetString("username"));
            return View("EditProfile", account);
        }
        [Route("editprofile")]

        [HttpPost]
        public IActionResult EditProfile(Account account, IFormFile file)
        {


            var currentAccount = accountService.Find(HttpContext.Session.GetString("username"));
            if (file != null)
            {
                var fileName = Guid.NewGuid().ToString().Replace("-", "");
                var ext = file.ContentType.Split(new char[] { '/' })[1];
                var path = Path.Combine(webHostEnvironment.WebRootPath, "Content\\images\\avatar", fileName + "." + ext);
                using (var fileStream = new FileStream(path, FileMode.Create))
                {
                    file.CopyTo(fileStream);
                }
                currentAccount.Photo = fileName + "." + ext;
            }
            currentAccount.FullName = account.FullName;
            currentAccount.Birthday = account.Birthday;
            currentAccount.Gender = account.Gender;

            currentAccount.Address = account.Address;
            currentAccount.Professional = account.Professional;
            currentAccount.Qualification = account.Qualification;
            currentAccount.Experience = account.Experience;
            currentAccount.Achievement = account.Achievement;
            accountService.Update(currentAccount);
            return RedirectToAction("EditProfile");


        }

        [Route("publicprofile")]
        [HttpGet]
        public IActionResult PublicProfile()
        {
            var user = HttpContext.Session.GetString("username");
            var a = db.Accounts.Where(i => i.UserName == user).Select(x => x.FullName);
            var fullname = "";
            foreach (var item in a)
            {
                fullname = item;

            }
            ViewBag.fullname = fullname;
            var account = accountService.Find(HttpContext.Session.GetString("username"));

            return View("PublicProfile", account);
        }

        [Route("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Remove("username");
            return RedirectToAction("login");
        }

        [Route("notification")]
        [HttpGet]
        public IActionResult Notification(int? page)
        {
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("username")))
            {
                return RedirectToAction("login", "account");
            }
            var user = HttpContext.Session.GetInt32("id");
           

            int pageSize = 3;
            int pageNumber = (page ?? 1);

            ViewBag.PageCurrent = pageNumber;
           
            var list = db.Accounts.Find(user).AccountNotifications.Where(x => x.Status == false).OrderByDescending(x => x.Notification.Created).ToPagedList(pageNumber, pageSize);
            return View("Notification", list);
        }
        //
        [Route("HideNotification/{id}")]
        public ActionResult HideNotification(int id)
        {

            var not = db.AccountNotifications.Find(id);
            if (string.IsNullOrEmpty(HttpContext.Session.GetString("username")))
            {
                return RedirectToAction("login", "account");
            }
            if (!HttpContext.Session.GetString("username").Equals(not.Acc.UserName))
            {
                return View("Notfound");
            }
            not.Status = true;
            db.Entry(not).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return RedirectToAction("notification");
        }


        // Privacy 
        [Route("privacy")]
        [HttpGet]
        public IActionResult Privacy(int id)
        {
            var doc = db.Accounts.SingleOrDefault(x => x.Id.Equals(id));
            var count = db.Accounts.Count(e => e.Id.Equals(id));
            var currentAccount = accountService.Find(HttpContext.Session.GetString("username"));
            if (count == 1)
            {
                if (currentAccount.Equals(doc.UserName))
                {
                    var doctor = db.Accounts.Find(id);



                    var detailProfile = new Account()
                    {
                        Id = doctor.Id,
                        FullName = doctor.FullName,
                        Photo = doctor.Photo,
                        StatusBlock = doctor.StatusBlock
                    };

                    ////////////////////////////////////////

                    // Đếm số bài viết của cá nhân
                    List<Post> listPost = db.Posts.ToList();
                    var listPostView = listPost.Select(x => new Post
                    {
                        Id = x.Id,
                        AccId = x.AccId,
                    }).ToList();
                    ViewBag.listPost = listPostView;

                    ////  count số like theo Id Post
                    //List<LikePost> likePosts = db.LikePosts.ToList();
                    //ViewBag.listLikePost = likePosts;

                    return View(detailProfile);
                }
                else
                {
                    ViewBag.thongbao = "The requested user could not be foun";
                    return View("Notification");
                }
            }
            else
            {
                ViewBag.thongbao = "The requested user could not be foun";
                return View("Notification");
            }
        }

        [Route("privacy")]
        [HttpPost]
        public IActionResult Privacy(Account account)
        {
            var doctor = db.Accounts.SingleOrDefault(a => a.Id.Equals(account.Id));
            doctor.StatusBlock = account.StatusBlock;
            db.SaveChanges();
            return RedirectToAction("profile/" + doctor.Id);
        }
    }
}
