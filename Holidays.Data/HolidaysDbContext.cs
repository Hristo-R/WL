namespace Holidays.Data
{
    using Holidays.Models;
    using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore;

    public class HolidaysDbContext : IdentityDbContext<User>
    {
        public HolidaysDbContext(DbContextOptions<HolidaysDbContext> options)
            : base(options)
        {
        }

        public DbSet<Hotel_OlympicBibis_table> Hotel_OlympicBibis_table { get; set; }

        public DbSet<HotelOlympicBibis> Hotel_OlympicBibis { get; set; }

    }
}