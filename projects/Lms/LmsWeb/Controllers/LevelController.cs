using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LmsWeb.Controllers
{
    using Commons.Repository;
    using Commons.Service;

    using Model;

    using RequestModel;

    using ViewModel;


    public class LevelController : BaseController<Level,LevelRequestModel,LevelViewModel>
    { 
        // dependency injection
        public LevelController()
            : base(new BaseService<Level, LevelRequestModel, LevelViewModel>(new BaseRepository<Level>(BusinessDbContext.Create())))
        {
        }
    }
}
