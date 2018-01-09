using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    using System.ComponentModel.DataAnnotations.Schema;

    using Commons.Model;
    public class Level : Entity
    {
        public string Name { get; set; }

        public int Index { get; set; }

        public string CourseId { get; set; }

        [ForeignKey("CourseId")]
        public virtual Course Course { get; set; }
    }
}
