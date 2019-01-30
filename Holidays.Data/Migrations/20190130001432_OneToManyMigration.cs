using Microsoft.EntityFrameworkCore.Migrations;

namespace Holidays.Data.Migrations
{
    public partial class OneToManyMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_HotelOlympicBibisTable_HotelOlympicBibisId",
                table: "HotelOlympicBibisTable");

            migrationBuilder.CreateIndex(
                name: "IX_HotelOlympicBibisTable_HotelOlympicBibisId",
                table: "HotelOlympicBibisTable",
                column: "HotelOlympicBibisId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_HotelOlympicBibisTable_HotelOlympicBibisId",
                table: "HotelOlympicBibisTable");

            migrationBuilder.CreateIndex(
                name: "IX_HotelOlympicBibisTable_HotelOlympicBibisId",
                table: "HotelOlympicBibisTable",
                column: "HotelOlympicBibisId",
                unique: true);
        }
    }
}
