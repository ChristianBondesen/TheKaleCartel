using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TheKaleCartelWebApi.Migrations
{
    public partial class newStyle : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_KaleEvents_KaleProfileId",
                table: "KaleEvents",
                column: "KaleProfileId");

            migrationBuilder.AddForeignKey(
                name: "FK_KaleEvents_KaleProfiles_KaleProfileId",
                table: "KaleEvents",
                column: "KaleProfileId",
                principalTable: "KaleProfiles",
                principalColumn: "KaleProfileId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_KaleEvents_KaleProfiles_KaleProfileId",
                table: "KaleEvents");

            migrationBuilder.DropIndex(
                name: "IX_KaleEvents_KaleProfileId",
                table: "KaleEvents");
        }
    }
}
