namespace LmsWeb.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class AspNetPermission : BaseEntity
    {
        [Index]
        [MaxLength(128)]
        public string RoleId { get; set; }
        
        [Index]
        [MaxLength(128)]
        public string ResourceId { get; set; }
        
        public bool IsAllowed { get; set; }

        [ForeignKey("RoleId")]
        public virtual ApplicationRole ApplicationRole { get; set; }

        [ForeignKey("ResourceId")]
        public virtual AspNetResource Resource { get; set; }
    }
}