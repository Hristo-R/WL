using System.Collections.Generic;

namespace Holidays.Models
{
    public class HotelOlympicBibis
    {
        public HotelOlympicBibis()
        {
            this.Table = new List<HotelOlympicBibisTable>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Galery { get; set; }

        public string Condition { get; set; }

        public virtual ICollection<HotelOlympicBibisTable> Table { get; set; }

        public string AdditionalDescription { get; set; }
    }
}
