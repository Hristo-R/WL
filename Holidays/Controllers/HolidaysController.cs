namespace Holidays.Web.Controllers
{
    using Holidays.Data;
    using Holidays.Models;
    using Holidays.Web.Models.BindingModels;
    using Holidays.Web.Models.ViewModels;
    using Microsoft.AspNetCore.Mvc;
    using System.Linq;

    public class HolidaysController : Controller
    {
        private readonly HolidaysDbContext db;

        public HolidaysController(HolidaysDbContext db)
        {
            this.db = db;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Sithonia()
        {
            return View();
        }

        // GET
        public IActionResult SithoniaTable()
        {
            var table = this.db.HotelOlympicBibisTable.Select(x =>
                new HotelOlympicBibisTableRowsViewModel
                {
                    Id = x.Id,
                    Accommodation = x.Accommodation,
                    Period01 = x.Period01,
                    Period02 = x.Period02,
                    Period03 = x.Period03,
                    Period04 = x.Period04,
                    Period05 = x.Period05,
                    Period06 = x.Period06,
                    Period07 = x.Period07,
                    Period08 = x.Period08,
                    Period09 = x.Period09,
                    Period10 = x.Period10
                }).ToList();

            return this.View(table);
        }

        [HttpPost]
        public JsonResult InsertRow(HotelOlympicBibisTableRowsBindingModel row)
        {
            var newRow = new HotelOlympicBibisTable
            {
                Accommodation = row.Accommodation,
                Period01 = row.Period01,
                Period02 = row.Period02,
                Period03 = row.Period03,
                Period04 = row.Period04,
                Period05 = row.Period05,
                Period06 = row.Period06,
                Period07 = row.Period07,
                Period08 = row.Period08,
                Period09 = row.Period09,
                Period10 = row.Period10,
            };

            this.db.HotelOlympicBibisTable.Add(newRow);
            this.db.SaveChanges();
           
            return Json(row);
        }

        [HttpPost]
        public ActionResult UpdateRow(HotelOlympicBibisTable row)
        {
            //    var rows = db.HotelOlympicBibisTable;
            //    HotelOlympicBibisTable updatedRows = (from r in rows
            //                                where r.Id == row.Id
            //                                select r).FirstOrDefault();
            //    updatedRows.Period01 = row.Period01;
            //    updatedRows.Period02 = row.Period02;
            //    rows.SaveChanges();

            return new EmptyResult();
        }
    }
}