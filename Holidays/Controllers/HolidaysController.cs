namespace Holidays.Web.Controllers
{
    using Holidays.Web.ViewModels;
    using Microsoft.AspNetCore.Mvc;
    using System.Linq;

    public class HolidaysController : BaseController
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Sithonia()
        {
            return View();
        }

        public IActionResult Table()
        {
            var table = this.Db.HotelOlympicBibisTable.Select(x =>
                new HotelOlympicBibisTableRawsViewModel
                {
                    Id = x.Id,
                    Accommodation = x.Accommodation,
                    Period01 = x.Period01,
                }).ToList();

            var model = new AllOrdersViewModel
            {
                Orders = orders
            };
            return this.View(model);
        }
    }
}