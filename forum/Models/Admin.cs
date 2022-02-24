using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace forum.Models
{
    public class Admin
    {
        public int Id { get; set; }

        public string FullName { get; set; }

        public Nullable<int> Phone { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }



        [Required(ErrorMessage = "UserName cannot be empty")]
        [MaxLength(20, ErrorMessage = "Password cannot be greater than 20")]
        public string Username { get; set; }

        [DataType(DataType.Password)]
        [Required(ErrorMessage = "Password cannot be empty")]
        [MaxLength(30, ErrorMessage = "Password cannot be greater than 30")]
        public string Password { get; set; }
        public string Photo { get; set; }



        public Nullable<System.DateTime> Birthday { get; set; }
        public string Gender { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
        public bool Active { get; set; }
        public bool Role { get; set; }


        public class LoginAccountAdmin
        {
            [Required(ErrorMessage = "Account does not exist")]
            [MaxLength(20, ErrorMessage = "Username cannot be greater than 20")]
            public string Username { get; set; }

            [DataType(DataType.Password)]
            [Required(ErrorMessage = "Incorrect password")]
            [MaxLength(30, ErrorMessage = "Password cannot be greater than 30")]
            public string Password { get; set; }
        }

        public class InforAccountAdmin
        {
            public int Id { get; set; }

            [Required(ErrorMessage = "FullName Not be Empty")]
            public string FullName { get; set; }           

            [Required(ErrorMessage = "Address Not be Empt")]
            public string Address { get; set; }

            [Required(ErrorMessage = "Email Not be Empt")]
            [EmailAddress(ErrorMessage = "Invalid Email")]
            public string Email { get; set; }

            public string Photo { get; set; }
        }


        public class SpecializeAdmin
        {
            public int Id { get; set; }

            [Required(ErrorMessage = "Please enter Decription")]
            public string Content { get; set; }
          

        }

        public class TopicAdmin
        {
            public int Id { get; set; }

            [Required(ErrorMessage = "Please enter Topic")]
            public string TopicName { get; set; }

            [Required(ErrorMessage = "Please enter Content")]
            public string Content { get; set; }
          
            public int? SpecializeId { get; set; }
            public string SpecializeName { get; set; }
           
            [NotMapped]
            public List<Specialize> specializes { get; set; }
        }

        public class PostAdmin
        {
            public int Id { get; set; }

            public int? AccId { get; set; }
            public int? TopicId { get; set; }
            public string PostName { get; set; }
            public bool? StatusBlock { get; set; }                  
            public DateTime? CreatedAt { get; set; }
            public DateTime? UpdatedAt { get; set; }
            public string Content { get; set; }
            public string Photo { get; set; }

        }
    }
}
