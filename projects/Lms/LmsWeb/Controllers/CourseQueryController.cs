namespace LmsWeb.Controllers
{
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Web.Http;

    using Commons.Repository;
    using Commons.Service;

    using LmsWeb.Models;

    using Microsoft.AspNet.Identity.Owin;

    using Model;

    using RequestModel;

    using ViewModel;

    [RoutePrefix("api/CourseQuery")]
  
    public class CourseQueryController : BaseQueryController<Course, CourseRequestModel, CourseViewModel>
    {
        public CourseQueryController()
            : base(new BaseService<Course, CourseRequestModel, CourseViewModel>(new BaseRepository<Course>(BusinessDbContext.Create())))
        {
        }

        [Authorize(Roles = "Teacher")]
        [Route("Teacher/MyCourses")]
        [ActionName("TeacherCourses")]
        public async Task<IHttpActionResult> SearchTeacherCourses(CourseRequestModel request)
        {
            this.SetAppUser();
            request.TeacherId = AppUser.Id;
            var list = await this.service.SearchAsync(request);
            return this.Ok(list);
        }

        [Authorize(Roles = "Student")]
        [Route("Student/MyCourses")]
        [ActionName("StudentCourses")]
        public async Task<IHttpActionResult> SearchStudentCourses(CourseRequestModel request)
        {
            this.SetAppUser();
            request.StudentId = AppUser.Id;
            var list = await this.service.SearchAsync(request);
            return this.Ok(list);
        }

        [AllowAnonymous]
        [Route("Student/AllCourses")]
        [ActionName("SearchAllCourses")]
        [HttpPost]
        public async Task<IHttpActionResult> SearchAllCourses(CourseRequestModel request)
        {
            var list = await this.service.SearchAsync(request);
            return this.Ok(list);
        }
    }
}
