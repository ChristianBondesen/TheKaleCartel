using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TheKaleCartelWebApi.Migrations
{
    public partial class NewThingsOnThings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "KaleEventId",
                table: "KaleRecipes",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "KaleEventId",
                table: "KaleBeers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_KaleRecipes_KaleEventId",
                table: "KaleRecipes",
                column: "KaleEventId");

            migrationBuilder.CreateIndex(
                name: "IX_KaleBeers_KaleEventId",
                table: "KaleBeers",
                column: "KaleEventId");

            migrationBuilder.AddForeignKey(
                name: "FK_KaleBeers_KaleEvents_KaleEventId",
                table: "KaleBeers",
                column: "KaleEventId",
                principalTable: "KaleEvents",
                principalColumn: "KaleEventId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_KaleRecipes_KaleEvents_KaleEventId",
                table: "KaleRecipes",
                column: "KaleEventId",
                principalTable: "KaleEvents",
                principalColumn: "KaleEventId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_KaleBeers_KaleEvents_KaleEventId",
                table: "KaleBeers");

            migrationBuilder.DropForeignKey(
                name: "FK_KaleRecipes_KaleEvents_KaleEventId",
                table: "KaleRecipes");

            migrationBuilder.DropIndex(
                name: "IX_KaleRecipes_KaleEventId",
                table: "KaleRecipes");

            migrationBuilder.DropIndex(
                name: "IX_KaleBeers_KaleEventId",
                table: "KaleBeers");

            migrationBuilder.DropColumn(
                name: "KaleEventId",
                table: "KaleRecipes");

            migrationBuilder.DropColumn(
                name: "KaleEventId",
                table: "KaleBeers");
        }
    }
}
