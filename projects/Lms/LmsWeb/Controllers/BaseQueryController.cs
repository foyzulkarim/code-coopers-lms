namespace LmsWeb.Controllers
{
    using System.Threading.Tasks;
    using System.Web.Http;

    using Commons.Model;
    using Commons.RequestModel;
    using Commons.Service;
    using Commons.ViewModel;

    public class BaseQueryController<T, TR, TV> : ApiController where T : Entity where TR : RequestModel<T> where TV : BaseViewModel<T>
    {
        private BaseService<T, TR, TV> service;

        public BaseQueryController(BaseService<T, TR, TV> service)
        {
            this.service = service;
        }

        [Route("Search")]
        [ActionName("Search")]
        [HttpPost]
        public async Task<IHttpActionResult> Search(TR request)
        {
            var students = await this.service.SearchAsync(request);
            return this.Ok(students);
        }
    }
}
