using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeedDataApp
{
    using LmsWeb;
    using LmsWeb.Models;

    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;

    class Program
    {
        static void Main(string[] args)
        {
            ApplicationDbContext db = ApplicationDbContext.Create();
            IUserStore<ApplicationUser> store = new UserStore<ApplicationUser>(db);
            ApplicationUserManager manager = new ApplicationUserManager(store);
            string superAdminRoleId = GetRoleId("SuperAdmin", db);

            string superAdminUsername = "foyzulkarim@gmail.com";
            if (manager.FindByName(superAdminUsername) == null)
            {
                ApplicationUser user = new ApplicationUser()
                {
                    Email = superAdminUsername,
                    UserName = superAdminUsername,
                    Created = DateTime.Now,
                    CreatedBy = superAdminUsername,
                    Modified = DateTime.Now,
                    ModifiedBy = superAdminUsername,
                    EmailConfirmed = true,
                    IsActive = true,
                    Id = new Guid().ToString(),
                    PhoneNumber = "01789000000",
                    RoleId = superAdminRoleId
                };
                IdentityResult result = manager.Create(user, "Pass@123");
            }

            string teacher = "teacher1@cclms.com";
            string student = "student@cclms.com";

            string teacherRoleId = GetRoleId("Teacher", db);
            string studentRoleId = GetRoleId("Student", db);
            

            if (manager.FindByName(teacher) == null)
            {
                ApplicationUser user = new ApplicationUser()
                {
                    Id = Guid.NewGuid().ToString(),
                    Email = teacher,
                    UserName = teacher,
                    Created = DateTime.Now,
                    CreatedBy = superAdminUsername,
                    Modified = DateTime.Now,
                    ModifiedBy = superAdminUsername,
                    EmailConfirmed = true,
                    IsActive = true,
                    PhoneNumber = "01789000001",
                    RoleId = teacherRoleId
                };

                IdentityResult result = manager.Create(user, "Pass@123");
            }


            if (manager.FindByName(student) == null)
            {
                ApplicationUser user = new ApplicationUser()
                {
                    Id = Guid.NewGuid().ToString(),
                    Email = student,
                    UserName = student,
                    Created = DateTime.Now,
                    CreatedBy = superAdminUsername,
                    Modified = DateTime.Now,
                    ModifiedBy = superAdminUsername,
                    EmailConfirmed = true,
                    IsActive = true,
                    PhoneNumber = "01789000002",
                    RoleId = studentRoleId
                };

                IdentityResult result = manager.Create(user, "Pass@123");
            }

            Console.WriteLine("Done");

            Console.Read();
        }

        private static string GetRoleId(string roleName, ApplicationDbContext db)
        {
            IdentityRole role = db.Roles.FirstOrDefault(x => x.Name == roleName);
            if (role == null)
            {
                role = new IdentityRole(roleName);
                db.Roles.Add(role);
                db.SaveChanges();
            }

            return role.Id;
        }
    }
}
