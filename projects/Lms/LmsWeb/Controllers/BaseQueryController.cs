namespace LmsWeb.Controllers
{
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Web.Http;

    using Commons.Model;
    using Commons.RequestModel;
    using Commons.Service;
    using Commons.ViewModel;

    using LmsWeb.Models;

    using Microsoft.AspNet.Identity.Owin;

    public class BaseQueryController<T, TR, TV> : ApiController where T : Entity where TR : RequestModel<T> where TV : BaseViewModel<T>
    {
        protected BaseService<T, TR, TV> service;

        public ApplicationUser AppUser { get; set; }

        public BaseQueryController(BaseService<T, TR, TV> service)
        {
            this.service = service;
           
        }

        protected void SetAppUser()
        {
            ApplicationUserManager manager = this.Request.GetOwinContext().Get<ApplicationUserManager>();
            this.AppUser = manager.FindByNameAsync(this.User.Identity.Name).Result;
        }

        [Route("Search")]
        [ActionName("Search")]
        [HttpPost]
        public async Task<IHttpActionResult> Search(TR request)
        {
            var list = await this.service.SearchAsync(request);
            return this.Ok(list);
        }
    }
}
