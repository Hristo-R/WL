namespace Holidays.Web.Controllers
{
    using Holidays.Data;
    using Microsoft.AspNetCore.Mvc;

    public abstract class BaseController : Controller
    {
        private readonly HolidaysDbContext db;

        protected BaseController()
        {
            this.Db = db;
        }

        public HolidaysDbContext Db { get; }
    }
}