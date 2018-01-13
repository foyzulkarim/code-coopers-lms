using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SeedDataApp
{
    using System.IO;
    using System.Security.AccessControl;

    using LmsWeb;
    using LmsWeb.Models;

    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;

    using Newtonsoft.Json;

    class Program
    {
        const string admin = "foyzulkarim@gmail.com";

        static void Main(string[] args)
        {
            ApplicationDbContext context = ApplicationDbContext.Create();

            string allText = File.ReadAllText("seed-data.json");
            SeedData seedData = JsonConvert.DeserializeObject<SeedData>(allText);

            Console.WriteLine("Operating on seed data roles: \n\n");
            foreach (var roleName in seedData.Roles)
            {
                ApplicationRole role = context.ApplicationRoles.FirstOrDefault(x => x.Name == roleName);
                if (role == null)
                {
                    context.Roles.Add(new ApplicationRole(roleName));
                    context.SaveChanges();
                    Console.WriteLine("Roles: " + roleName);
                }
            }

            for (var index = 0; index < seedData.Users.Count; index++)
            {
                var seedUser = seedData.Users[index];
                ApplicationUserManager manager = new ApplicationUserManager(new UserStore<ApplicationUser>(context));
                ApplicationUser user = manager.FindByName(seedUser.UserName);
                if (user == null)
                {
                    user = new ApplicationUser()
                    {
                        Email = seedUser.UserName,
                        UserName = seedUser.UserName,
                        EmailConfirmed = true,
                        PhoneNumber = index.ToString(),
                        IsActive = true,
                        RoleId = GetRoleId(seedUser.Role, context),
                        Created = DateTime.Now,
                        Modified = DateTime.Now,
                        CreatedBy = admin,
                        ModifiedBy = admin
                    };

                    IdentityResult result = manager.Create(user, seedUser.Password);
                    if (result.Succeeded)
                    {
                        manager.AddToRole(user.Id, seedUser.Role);
                    }

                    Console.WriteLine("Adding User: " + user.UserName);
                }

                var roles = manager.GetRoles(user.Id);
                if (roles.Count == 0)
                {
                    Console.WriteLine("Adding user role - " + seedUser.Role);
                    manager.AddToRole(user.Id, seedUser.Role);
                }
            }

            var dbRoles = context.ApplicationRoles.ToList();
            Console.WriteLine("operating on resources: \n\n");
            List<SeedResource> resources = seedData.Resources;
            AddPermissions(resources, context, dbRoles);

            foreach (var resource in resources)
            {
                Console.WriteLine(resource.Name);
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


        private static void AddPermissions(List<SeedResource> resources, ApplicationDbContext context, List<ApplicationRole> dbRoles)
        {
            foreach (SeedResource seedResource in resources)
            {
                var dbResource = context.AspNetResources.FirstOrDefault(x => x.Name == seedResource.Name);
                if (dbResource == null)
                {
                    dbResource = new AspNetResource()
                                     {
                                         Name = seedResource.Name,
                                         IsPublic = seedResource.IsPublic,
                                         Id = Guid.NewGuid().ToString(),
                                         Created = DateTime.Now,
                                         Modified = DateTime.Now,
                                         CreatedBy = admin,
                                         ModifiedBy = admin
                                     };
                    context.AspNetResources.Add(dbResource);
                    context.SaveChanges();
                    Console.WriteLine("Adding Resource: " + dbResource.Name);
                }

                var allowedRoles = seedResource.Permissions.ToList();
                foreach (string allowedRole in allowedRoles)
                {
                    var dbRole = dbRoles.First(x => x.Name == allowedRole);
                    var permission =
                        context.AspNetPermissions.FirstOrDefault(x => x.RoleId == dbRole.Id && x.ResourceId == dbResource.Id);
                    if (permission == null)
                    {
                        permission = new AspNetPermission()
                        {
                            IsAllowed = true,
                            ResourceId = dbResource.Id,
                            RoleId = dbRole.Id,
                            Id = Guid.NewGuid().ToString(),
                            Created = DateTime.Now,
                            Modified = DateTime.Now,
                            CreatedBy = admin,
                            ModifiedBy = admin
                        };
                        context.AspNetPermissions.Add(permission);
                        context.SaveChanges();
                        Console.WriteLine("Adding permission : resource - " + dbResource.Name + "\t role - " + dbRole.Name);
                    }
                }
            }
        }
    }
}
