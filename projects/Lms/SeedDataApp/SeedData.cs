using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeedDataApp
{
    using LmsWeb.Models;

    public class SeedUser : ApplicationUser
    {
        public string Role { get; set; }

        public string Password { get; set; }
    }

    public class SeedResource
    {
        public string Name { get; set; }
        public bool IsPublic { get; set; }
        public List<string> Permissions { get; set; }
    }

    public class SeedData
    {
        public List<string> Roles { get; set; }
        public List<SeedUser> Users { get; set; }
        public List<SeedResource> Resources { get; set; }
    }
}
