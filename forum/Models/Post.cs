using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web.Mvc;

#nullable disable

namespace forum.Models
{
    public partial class Post
    {
        public Post()
        {
            Comments = new HashSet<Comment>();
        }

        public int Id { get; set; }
        [DisplayName("User Id")]
        [ForeignKey("User")]
        public int AccId { get; set; }
        [DisplayName("Topic")]
        [ForeignKey("Topic")]
        [Required(ErrorMessage = "Topic field can not be empty")]
        public int? TopicId { get; set; }
        [DisplayName("Title")]
        [Required(ErrorMessage = "Title field can not be empty.")]
        [StringLength(200, ErrorMessage = "Title can not more than 200 characters.")]
        [MinLength(10, ErrorMessage = "Title can not less than 10 characters.")]
        public string PostName { get; set; }
        [DisplayName("Post status")]
        public bool? StatusBlock { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        [DisplayName("Content")]
        [AllowHtml]
        [UIHint("tinymce_jquery_full")]

        [Required(ErrorMessage = "Content field can not be empty.")]
        [MinLength(10, ErrorMessage = "Content can not less than 10 characters.")]
        public string Content { get; set; }
       

        public virtual Account Acc { get; set; }
        public virtual Topic Topic { get; set; }
        public virtual ICollection<Comment> Comments { get; set; }
    }
}
