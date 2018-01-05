using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LmsWeb.Filters
{
    using System.Diagnostics;
    using System.Net;
    using System.Net.Http;
    using System.Threading;
    using System.Web.Http.Controllers;
    using System.Web.Http.Filters;

    using Commons.Model;

    using LmsWeb.Models;

    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.Owin;

    public class EntitySaveFilterAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            object data = actionContext.ActionArguments["model"];
            
            if (data != null)
            {
                string username = actionContext.RequestContext.Principal.Identity.Name;
                var isEntity = data is Entity;
                Entity entity = data as Entity;
                if (isEntity)
                {
                    entity.Id = Guid.NewGuid().ToString();
                    entity.Created = DateTime.UtcNow;
                    entity.Modified = DateTime.UtcNow;
                    entity.CreatedBy = username;
                    entity.ModifiedBy = username;
                }                
            }
            else
            {
                actionContext.Response = actionContext.Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Data must not be empty");
            }

        }
    }
}