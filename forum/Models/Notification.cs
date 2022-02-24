using System;
using System.Collections.Generic;

#nullable disable

namespace forum.Models
{
    public partial class Notification
    {
        public Notification()
        {
            AccountNotifications = new HashSet<AccountNotification>();
        }

        public int Id { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public DateTime? Created { get; set; }

        public virtual ICollection<AccountNotification> AccountNotifications { get; set; }
    }
}
