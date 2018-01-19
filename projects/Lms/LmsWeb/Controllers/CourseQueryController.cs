namespace LmsWeb.Controllers
{
    using System.Web.Http;

    using Commons.Repository;
    using Commons.Service;

    using Model;

    using RequestModel;

    using ViewModel;

    [AllowAnonymous]
    [RoutePrefix("api/CourseQuery")]
    public class CourseQueryController : BaseQueryController<Course, CourseRequestModel, CourseViewModel>
    {
        public CourseQueryController()
            : base(new BaseService<Course, CourseRequestModel, CourseViewModel>(new BaseRepository<Course>(BusinessDbContext.Create())))
        {
        }
    }
}
