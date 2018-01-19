using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LmsWeb.Controllers
{
    using System.Threading.Tasks;
    using System.Transactions;

    using Commons.Model;
    using Commons.Repository;
    using Commons.RequestModel;
    using Commons.Service;
    using Commons.ViewModel;

    using LmsWeb.Filters;

    using Microsoft.AspNet.Identity;

    using Model;

    using RequestModel;
    
    using ViewModel;

    [RoutePrefix("api/Course")]
    [Authorize(Roles = "Teacher")]
    public class CourseController : BaseController<Course, CourseRequestModel, CourseViewModel>
    { 
        public CourseController()
            : base(new BaseService<Course, CourseRequestModel, CourseViewModel>(new BaseRepository<Course>(BusinessDbContext.Create())))
        {
            
        }

        [HttpPost]
        [Route("Add")]
        [ActionName("Add")]
        public override async Task<IHttpActionResult> Add(Course model)
        {
            this.SetAppUser();

            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }

            model.TeacherId = this.AppUser.Id;
            model.ModifiedBy = this.User.Identity.GetUserName();
            model.CreatedBy = this.User.Identity.GetUserName();

            model.Id = Guid.NewGuid().ToString();

            var add = this.service.Add(model);
            return this.Ok(add);
        }
    }
}
