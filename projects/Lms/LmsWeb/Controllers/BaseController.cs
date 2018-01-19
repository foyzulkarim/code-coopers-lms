namespace LmsWeb.Controllers
{
    using System;
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Web.Http;

    using Commons.Model;
    using Commons.Repository;
    using Commons.RequestModel;
    using Commons.Service;
    using Commons.ViewModel;

    using LmsWeb.Models;

    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.Owin;

    using Model;

    public class BaseController<T, TR, TV> : ApiController where T : Entity where TR : RequestModel<T> where TV : BaseViewModel<T>
    {
        protected BaseService<T, TR, TV> service;

        protected ApplicationUser AppUser;

        public BaseController(BaseService<T, TR, TV> service)
        {
            this.service = service;          
        }

        protected void SetAppUser()
        {
            ApplicationUserManager manager = this.Request.GetOwinContext().Get<ApplicationUserManager>();
            this.AppUser = manager.FindByNameAsync(this.User.Identity.Name).Result;
        }

        [HttpPost]
        [Route("Add")]
        [ActionName("Add")]
        public virtual async Task<IHttpActionResult> Add(T model)
        {
            if (!this.ModelState.IsValid)
            {
                return this.BadRequest(this.ModelState);
            }
            
            model.ModifiedBy = this.User.Identity.GetUserName();
            model.CreatedBy = this.User.Identity.GetUserName();

            model.Id = Guid.NewGuid().ToString();

            var add = this.service.Add(model);
            return this.Ok(add);           
        }
    }
}