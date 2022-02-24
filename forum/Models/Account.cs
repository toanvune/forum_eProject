using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace forum.Models
{
    public partial class Account
    {
        public Account()
        {
            AccountNotifications = new HashSet<AccountNotification>();
            Comments = new HashSet<Comment>();
            Posts = new HashSet<Post>();
        }

        public int Id { get; set; }
        [DisplayName("Username")]
        [RegularExpression(@"^[^<>.,?;:'()!~%\-@#/*""\s]+$", ErrorMessage = "Username can not include special character.")]
        [Required(ErrorMessage = "Username field can not be empty.")]
        [StringLength(50, ErrorMessage = "Username can not more than 50 characters.")]
        public string UserName { get; set; }
        [DisplayName("Password")]
        [Required(ErrorMessage = "Password field can not be empty.")]
        [MinLength(8, ErrorMessage = "Password must be at least 8 characters.")]
        public string PassHash { get; set; }


        [Required(ErrorMessage = "Name cannot be blank")]
        [MaxLength(30, ErrorMessage = "Name cannot be more than 30 characters")]
        public string FullName { get; set; }
        public DateTime Birthday { get; set; }
        public string Gender { get; set; }

        [Required(ErrorMessage = "Phone number cannot be blank")]
        [MaxLength(10, ErrorMessage = "Name cannot be more than 10 characters")]
        public string Mobile { get; set; }


        [DisplayName("Email")]
        [Required(ErrorMessage = "Please provide the invitee's Email Address")]
        [EmailAddress(ErrorMessage = "Please provide a valid email address")]
        public string Email { get; set; }
        [MaxLength(50, ErrorMessage = "The Address cannot be more than 50 characters")]
        public string Address { get; set; }
        public bool? Active { get; set; }
        public string Professional { get; set; }
        public string Qualification { get; set; }
        public string Experience { get; set; }
        public string Achievement { get; set; }
        public int? Role { get; set; }
        public bool? StatusBlock { get; set; }
        public bool? RegistrationStatus { get; set; }
        public string Photo { get; set; }

        public virtual Role RoleNavigation { get; set; }
        public virtual ICollection<AccountNotification> AccountNotifications { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
        public virtual ICollection<Post> Posts { get; set; }
    }
}
