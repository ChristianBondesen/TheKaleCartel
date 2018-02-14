using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TheKaleCartelWebApi.Migrations
{
    public partial class ChangedNameForBeerPercentage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "VolProcentage",
                table: "KaleBeers",
                newName: "VolPercentage");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "VolPercentage",
                table: "KaleBeers",
                newName: "VolProcentage");
        }
    }
}
