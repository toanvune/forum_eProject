using System;
using System.Collections.Generic;

#nullable disable

namespace forum.Models
{
    public partial class AccountNotification
    {
        public int Id { get; set; }
        public int? NotificationId { get; set; }
        public int? AccId { get; set; }
        public bool Status { get; set; }

        public virtual Account Acc { get; set; }
        public virtual Notification Notification { get; set; }
    }
}
