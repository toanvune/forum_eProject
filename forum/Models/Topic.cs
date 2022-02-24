using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace forum.Models
{
    public partial class Topic
    {
        public Topic()
        {
            Posts = new HashSet<Post>();
        }

        public int Id { get; set; }
        public int? SpecializeId { get; set; }
        [StringLength(200, ErrorMessage = "Title can not more than 200 characters.")]
        [MinLength(5, ErrorMessage = "Title can not less than 5 characters.")]
        [Required(ErrorMessage = "Please enter Topic Name ")]
        public string TopicName { get; set; }
        [Required(ErrorMessage = "Content field can not be empty.")]
        [MinLength(5, ErrorMessage = "Content can not less than 5 characters.")]
        public string Description { get; set; }
        public bool? Status { get; set; }

        public virtual Specialize Specialize { get; set; }
        public virtual ICollection<Post> Posts { get; set; }
    }
}
