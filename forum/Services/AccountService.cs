using forum.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace forum.Services
{
    public interface AccountService
    {
        Account Find(int id);
        public Account Find(string username);

        Account Update(Account account);
    }
}
