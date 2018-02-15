using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TheKaleCartelWebApi.Migrations
{
    public partial class courseof : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CoursOfAction",
                table: "KaleRecipes",
                newName: "PictureUrl");

            migrationBuilder.AddColumn<string>(
                name: "CourseOfAction",
                table: "KaleRecipes",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CourseOfAction",
                table: "KaleRecipes");

            migrationBuilder.RenameColumn(
                name: "PictureUrl",
                table: "KaleRecipes",
                newName: "CoursOfAction");
        }
    }
}
