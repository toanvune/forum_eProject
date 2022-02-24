using System;
using System.Collections.Generic;

#nullable disable

namespace forum.Models
{
    public partial class Tag
    {
        public Tag()
        {
            PostTags = new HashSet<PostTag>();
        }

        public int Id { get; set; }
        public string Title { get; set; }

        public virtual ICollection<PostTag> PostTags { get; set; }
    }
}
