using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    using Commons.Model;

    public class Course : Entity
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string Requirements { get; set; }

        public double Fee { get; set; }

        public bool IsFree { get; set; }

        public string TeacherId { get; set; }

        public string PosterUrl { get; set; }

        public string PromoVideoUrl { get; set; }
    }
}
