namespace RequestModel
{
    using System;
    using System.Linq.Expressions;

    using Commons.RequestModel;
    using Commons.ViewModel;

    using Model;

    public class LevelRequestModel : RequestModel<Level>
    {
        public LevelRequestModel(string keyword, string orderBy = "Modified", string isAscending = "False")
            : base(keyword, orderBy, isAscending)
        {
        }

        protected override Expression<Func<Level, bool>> GetExpression()
        {
            return x => x != null;
        }

        public override Expression<Func<Level, DropdownViewModel>> Dropdown()
        {
            throw new NotImplementedException();
        }
    }
}