using forum.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace forum.Services
{
    public class AccountServiceImpl : AccountService
    {
        private DatabaseContext db;

        public AccountServiceImpl(DatabaseContext _db)
        {
            db = _db;
        }
        public Account Find(int id)
        {
            return db.Accounts.Find(id);
        }
        public Account Find(string username)
        {
            return db.Accounts.SingleOrDefault(p => p.UserName == username);
        }
        public Account Update(Account account)
        {
            db.Entry(account).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            db.SaveChanges();
            return account;
        }
    }
}
