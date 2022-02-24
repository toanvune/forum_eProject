using System;
using System.Collections.Generic;

#nullable disable

namespace forum.Models
{
    public partial class Comment
    {
        public Comment()
        {
            InverseParent = new HashSet<Comment>();
        }

        public int Id { get; set; }
        public int? AccId { get; set; }
        public int? ParentId { get; set; }
        public int? PostId { get; set; }
        public bool? Status { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string Content { get; set; }

        public virtual Account Acc { get; set; }
        public virtual Comment Parent { get; set; }
        public virtual Post Post { get; set; }
        public virtual ICollection<Comment> InverseParent { get; set; }
    }
}
