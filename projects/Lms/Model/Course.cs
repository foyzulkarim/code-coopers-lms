using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    using Commons.Model;
    using System.ComponentModel.DataAnnotations;

    public class Course : Entity
    {
        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        [MaxLength(250)]
        public string Description { get; set; }

        [Required]
        [MaxLength(200)]
        public string Requirements { get; set; }

        public double Fee { get; set; }

        public bool IsFree { get; set; }

        [Required]
        public string TeacherId { get; set; }

        public string PosterUrl { get; set; }

        public string PromoVideoUrl { get; set; }
    }
}
