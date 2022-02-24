using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace forum.Models
{
    public partial class DatabaseContext : DbContext
    {
        public DatabaseContext()
        {
        }

        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Account> Accounts { get; set; }
        public virtual DbSet<AccountNotification> AccountNotifications { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<Help> Helps { get; set; }
        public virtual DbSet<Notification> Notifications { get; set; }
        public virtual DbSet<Post> Posts { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Setting> Settings { get; set; }
        public virtual DbSet<Specialize> Specializes { get; set; }
        public virtual DbSet<Topic> Topics { get; set; }

       

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Account>(entity =>
            {
                entity.ToTable("Account");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Achievement)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("achievement");

                entity.Property(e => e.Active).HasColumnName("active");

                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.Birthday)
                    .HasColumnType("date")
                    .HasColumnName("birthday");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Experience)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("experience");

                entity.Property(e => e.FullName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("fullName");

                entity.Property(e => e.Gender)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("gender");

                entity.Property(e => e.Mobile)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("mobile");

                entity.Property(e => e.PassHash)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("passHash");

                entity.Property(e => e.Photo)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("photo")
                    .HasDefaultValueSql("('avatar.png')");

                entity.Property(e => e.Professional)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("professional");

                entity.Property(e => e.Qualification)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("qualification");

                entity.Property(e => e.RegistrationStatus)
                    .HasColumnName("registrationStatus")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.Role)
                    .HasColumnName("role")
                    .HasDefaultValueSql("((2))");

                entity.Property(e => e.StatusBlock)
                    .HasColumnName("statusBlock")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.UserName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("userName");

                entity.HasOne(d => d.RoleNavigation)
                    .WithMany(p => p.Accounts)
                    .HasForeignKey(d => d.Role)
                    .HasConstraintName("FK__Account__role__33D4B598");
            });

            modelBuilder.Entity<AccountNotification>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AccId).HasColumnName("accId");

                entity.Property(e => e.NotificationId).HasColumnName("notificationId");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.HasOne(d => d.Acc)
                    .WithMany(p => p.AccountNotifications)
                    .HasForeignKey(d => d.AccId)
                    .HasConstraintName("FK_AccountNotifications_Account");

                entity.HasOne(d => d.Notification)
                    .WithMany(p => p.AccountNotifications)
                    .HasForeignKey(d => d.NotificationId)
                    .HasConstraintName("FK_AccountNotifications_Notifications");
            });

            modelBuilder.Entity<Comment>(entity =>
            {
                entity.ToTable("Comment");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AccId).HasColumnName("accId");

                entity.Property(e => e.Content)
                    .HasColumnType("text")
                    .HasColumnName("content");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("createdAt");

                entity.Property(e => e.ParentId).HasColumnName("parentId");

                entity.Property(e => e.PostId).HasColumnName("postId");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasDefaultValueSql("((0))");

                entity.HasOne(d => d.Acc)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.AccId)
                    .HasConstraintName("FK_Comment_Account");

                entity.HasOne(d => d.Parent)
                    .WithMany(p => p.InverseParent)
                    .HasForeignKey(d => d.ParentId)
                    .HasConstraintName("FK_Comment_Comment");

                entity.HasOne(d => d.Post)
                    .WithMany(p => p.Comments)
                    .HasForeignKey(d => d.PostId)
                    .HasConstraintName("FK__Comment__postId__36B12243");
            });

            modelBuilder.Entity<Help>(entity =>
            {
                entity.ToTable("Help");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Address)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("contactNumber");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Password)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.Subject)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("subject");
            });

            modelBuilder.Entity<Notification>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Created)
                    .HasColumnType("datetime")
                    .HasColumnName("created");

                entity.Property(e => e.Title)
                    .HasMaxLength(200)
                    .HasColumnName("title");

                entity.Property(e => e.Url).HasColumnName("url");
            });

            modelBuilder.Entity<Post>(entity =>
            {
                entity.ToTable("Post");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AccId).HasColumnName("accId");

                entity.Property(e => e.Content)
                    .HasColumnType("text")
                    .HasColumnName("content");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("createdAt");

               

                entity.Property(e => e.PostName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("postName");

                entity.Property(e => e.StatusBlock)
                    .HasColumnName("statusBlock")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.TopicId).HasColumnName("topicId");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("updatedAt");

                entity.HasOne(d => d.Acc)
                    .WithMany(p => p.Posts)
                    .HasForeignKey(d => d.AccId)
                    .HasConstraintName("FK__Post__accId__34C8D9D1");

                entity.HasOne(d => d.Topic)
                    .WithMany(p => p.Posts)
                    .HasForeignKey(d => d.TopicId)
                    .HasConstraintName("FK_Post_Topic");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.ToTable("Role");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Setting>(entity =>
            {
                entity.ToTable("Setting");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.SuccessMsg)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("successMsg");

                entity.Property(e => e.Title)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("title");
            });

            modelBuilder.Entity<Specialize>(entity =>
            {
                entity.ToTable("Specialize");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.SpecializeName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("specializeName");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasDefaultValueSql("((0))");
            });

            modelBuilder.Entity<Topic>(entity =>
            {
                entity.ToTable("Topic");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasMaxLength(250)
                    .IsUnicode(false)
                    .HasColumnName("description");

                entity.Property(e => e.SpecializeId).HasColumnName("specializeId");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.TopicName)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("topicName");

                entity.HasOne(d => d.Specialize)
                    .WithMany(p => p.Topics)
                    .HasForeignKey(d => d.SpecializeId)
                    .HasConstraintName("FK_Topic_Specialize");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
