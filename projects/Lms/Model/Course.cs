using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    using Commons.Model;

    public class Course : Entity
    {
        [Required]
        [MaxLength(100)]
        [Index]
        public string Name { get; set; }

        [MaxLength(400)]
        public string Description { get; set; }

        [MaxLength(100)]
        public string Requirements { get; set; }

        [Required]
        public double Fee { get; set; }
        
        [Required]
        public string TeacherId { get; set; }

        [Required]
        [MaxLength(300)]
        public string PosterUrl { get; set; }

        [MaxLength(300)]
        public string PromoVideoUrl { get; set; }

        public int TotalLevels { get; set; }

        public int TotalSections { get; set; }

        public int TotalViews { get; set; }

        public int TotalEnrolled { get; set; }

        public double Rating { get; set; }

        public string Language { get; set; }


    }
}
