namespace LmsWeb.Controllers
{
    using System;
    using System.Web.Http;

    using Commons.Model;
    using Commons.Repository;
    using Commons.RequestModel;
    using Commons.Service;
    using Commons.ViewModel;

    using Microsoft.AspNet.Identity;

    using Model;

    public class BaseController<T, TR, TV> : ApiController where T : Entity where TR : RequestModel<T> where TV : BaseViewModel<T>
    {
        private BaseService<T, TR, TV> service;

        public BaseController(BaseService<T, TR, TV> service)
        {
            this.service = service;
        }

        [HttpPost]
        [Route("Add")]
        [ActionName("Add")]
        public IHttpActionResult Add(T model)
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