using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    using System.Data.Entity;

    public class BusinessDbContext : DbContext
    {
        public BusinessDbContext() : base("DefaultBusinessConnection")
        {
            this.Configuration.LazyLoadingEnabled = false;
        }

        public static BusinessDbContext Create()
        {
            return new BusinessDbContext();
        }

        public DbSet<Course> Courses { get; set; }
    }
}
