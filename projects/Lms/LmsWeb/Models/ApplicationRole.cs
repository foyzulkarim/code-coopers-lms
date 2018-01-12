namespace LmsWeb.Models
{
    using System.ComponentModel.DataAnnotations;

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
    }
}