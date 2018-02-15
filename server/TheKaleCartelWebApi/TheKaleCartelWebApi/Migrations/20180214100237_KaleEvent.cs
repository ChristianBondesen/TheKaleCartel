using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TheKaleCartelWebApi.Migrations
{
    public partial class KaleEvent : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "KaleEvents",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    EventDate = table.Column<DateTime>(nullable: false),
                    KaleProfileId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KaleEvents", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "KaleEvents");
        }
    }
}
