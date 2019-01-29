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

        public DbSet<HotelOlympicBibisTable> HotelOlympicBibisTable { get; set; }

        public DbSet<HotelOlympicBibis> HotelOlympicBibis { get; set; }

    }
}