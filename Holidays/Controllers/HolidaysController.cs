namespace Holidays.Web.Controllers
{
    using Microsoft.AspNetCore.Mvc;

    public class HolidaysController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Sithonia()
        {
            return View();
        }
    }
}