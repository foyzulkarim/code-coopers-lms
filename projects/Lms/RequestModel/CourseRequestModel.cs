using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RequestModel
{
    using System.Linq.Expressions;
    using Commons.RequestModel;
    using Commons.ViewModel;

    using Model;

    public class CourseRequestModel : RequestModel<Course>
    {
        public CourseRequestModel(string keyword, string orderBy = "Modified", string isAscending = "False")
            : base(keyword, orderBy, isAscending)
        {
        }

        protected override Expression<Func<Course, bool>> GetExpression()
        {
            return x => x != null;
        }

        public override Expression<Func<Course, DropdownViewModel>> Dropdown()
        {
            throw new NotImplementedException();
        }
    }
}
