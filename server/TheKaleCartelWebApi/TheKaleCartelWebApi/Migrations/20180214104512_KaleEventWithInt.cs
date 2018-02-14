using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TheKaleCartelWebApi.Migrations
{
    public partial class KaleEventWithInt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_KaleEvents",
                table: "KaleEvents");

            migrationBuilder.DropColumn(
                name: "Id",
                table: "KaleEvents");

            migrationBuilder.AddColumn<int>(
                name: "KaleEventId",
                table: "KaleEvents",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_KaleEvents",
                table: "KaleEvents",
                column: "KaleEventId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_KaleEvents",
                table: "KaleEvents");

            migrationBuilder.DropColumn(
                name: "KaleEventId",
                table: "KaleEvents");

            migrationBuilder.AddColumn<string>(
                name: "Id",
                table: "KaleEvents",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_KaleEvents",
                table: "KaleEvents",
                column: "Id");
        }
    }
}
