using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel
{
    using Commons.Model;
    using Commons.ViewModel;

    using Model;

    public class CourseViewModel : BaseViewModel<Course>
    {
        public CourseViewModel(Course x)
            : base(x)
        {
            Name = x.Name;
            Fee = x.Fee;
        }

        public double Fee { get; set; }

        public string Name { get; set; }
    }
}
