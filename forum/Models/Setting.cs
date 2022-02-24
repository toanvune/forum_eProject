using System;
using System.Collections.Generic;

#nullable disable

namespace forum.Models
{
    public partial class Setting
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string SuccessMsg { get; set; }
    }
}
