namespace Holidays.Web.Controllers
{
    using Holidays.Data;
    using Microsoft.AspNetCore.Mvc;

    public abstract class BaseController : Controller
    {
        private readonly HolidaysDbContext db;

        public BaseController(HolidaysDbContext db)
        {
            this.db = db;
        }
    }
}