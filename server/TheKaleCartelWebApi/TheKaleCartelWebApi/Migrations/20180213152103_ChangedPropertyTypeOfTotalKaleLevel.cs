using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TheKaleCartelWebApi.Migrations
{
    public partial class ChangedPropertyTypeOfTotalKaleLevel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotaleKaleLevel",
                table: "KaleProfiles");

            migrationBuilder.AddColumn<int>(
                name: "TotalKaleLevel",
                table: "KaleProfiles",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "KaleBeers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalKaleLevel",
                table: "KaleProfiles");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "KaleBeers");

            migrationBuilder.AddColumn<string>(
                name: "TotaleKaleLevel",
                table: "KaleProfiles",
                nullable: true);
        }
    }
}
