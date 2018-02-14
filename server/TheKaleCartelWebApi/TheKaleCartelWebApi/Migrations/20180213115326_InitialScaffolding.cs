using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TheKaleCartelWebApi.Migrations
{
    public partial class InitialScaffolding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "KaleProfiles",
                columns: table => new
                {
                    KaleProfileId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    PictureUrl = table.Column<string>(nullable: true),
                    TotaleKaleLevel = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KaleProfiles", x => x.KaleProfileId);
                });

            migrationBuilder.CreateTable(
                name: "KaleBeers",
                columns: table => new
                {
                    KaleBeerId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    KaleProfileId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    PictureUrl = table.Column<string>(nullable: true),
                    Rating = table.Column<int>(nullable: false),
                    VolProcentage = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KaleBeers", x => x.KaleBeerId);
                    table.ForeignKey(
                        name: "FK_KaleBeers_KaleProfiles_KaleProfileId",
                        column: x => x.KaleProfileId,
                        principalTable: "KaleProfiles",
                        principalColumn: "KaleProfileId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "KaleRecipes",
                columns: table => new
                {
                    KaleRecipeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CoursOfAction = table.Column<string>(nullable: true),
                    CreationDate = table.Column<DateTime>(nullable: false),
                    KaleProfileId = table.Column<int>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    Rating = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KaleRecipes", x => x.KaleRecipeId);
                    table.ForeignKey(
                        name: "FK_KaleRecipes_KaleProfiles_KaleProfileId",
                        column: x => x.KaleProfileId,
                        principalTable: "KaleProfiles",
                        principalColumn: "KaleProfileId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_KaleBeers_KaleProfileId",
                table: "KaleBeers",
                column: "KaleProfileId");

            migrationBuilder.CreateIndex(
                name: "IX_KaleRecipes_KaleProfileId",
                table: "KaleRecipes",
                column: "KaleProfileId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "KaleBeers");

            migrationBuilder.DropTable(
                name: "KaleRecipes");

            migrationBuilder.DropTable(
                name: "KaleProfiles");
        }
    }
}
