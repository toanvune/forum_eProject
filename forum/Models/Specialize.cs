using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace forum.Models
{
    public partial class Specialize
    {
        public Specialize()
        {
            Topics = new HashSet<Topic>();
        }
      
        public int Id { get; set; }
        [DisplayName("Title")]
        [StringLength(200, ErrorMessage = "Title can not more than 200 characters.")]
        [MinLength(5, ErrorMessage = "Title can not less than 5 characters.")]
        [Required(ErrorMessage = "Please enter Specialize Name ")]
        public string SpecializeName { get; set; }
        [DisplayName("Description")]
        [Required(ErrorMessage = "Content field can not be empty.")]
        [MinLength(5, ErrorMessage = "Content can not less than 5 characters.")]
        public string Description { get; set; }

        public bool? Status { get; set; }

        public virtual ICollection<Topic> Topics { get; set; }
    }
}
