namespace LmsWeb.Models
{
    using System.Collections.Generic;

    public class AspNetResource : BaseEntity
    {
        public string Name { get; set; }

        public bool IsPublic { get; set; }

        public virtual ICollection<AspNetPermission> Permissions { get; set; }
    }
}