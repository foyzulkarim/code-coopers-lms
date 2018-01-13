namespace LmsWeb.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.Security.Cryptography.X509Certificates;

    using Microsoft.AspNet.Identity.EntityFramework;

    public class ApplicationRole : IdentityRole
    {
        public ApplicationRole(string name) : base(name)
        {

        }

        public ApplicationRole()
        {
            
        }

        [StringLength(50)]
        public string Description { get; set; }

        [StringLength(20)]
        public string DefaultRoute { get; set; }

        public virtual ICollection<AspNetPermission> Permissions { get; set; }
    }
}