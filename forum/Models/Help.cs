using System;
using System.Collections.Generic;

#nullable disable

namespace forum.Models
{
    public partial class Help
    {
        public int Id { get; set; }
        public string ContactNumber { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Subject { get; set; }
    }
}
