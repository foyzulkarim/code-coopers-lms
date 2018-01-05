using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LmsWeb.Controllers
{
    using System.Transactions;

    using Commons.Model;
    using Commons.RequestModel;
    using Commons.Service;
    using Commons.ViewModel;

    using LmsWeb.Filters;

    using Model;

    [RoutePrefix("api/Course")]
    [Authorize]
    public class CourseController : ApiController
    {
        [HttpPost]
        [Route("Add")]
        [ActionName("Add")]
        public IHttpActionResult Post(Course course)
        {
            var id = Guid.NewGuid()+"\t" + DateTime.Now+" "+course.Name;
            return this.Ok($"{id}");
        }
    }
}
