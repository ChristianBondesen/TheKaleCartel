using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace TheKaleCartelWebApi.Migrations
{
    public partial class ProfilePopulation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("SET IDENTITY_INSERT KaleProfiles ON");
            migrationBuilder.Sql(
                "INSERT INTO KaleProfiles (KaleProfileId, Name, TotaleKaleLevel, PictureUrl, Description) " +
                "VALUES (1,'Christian', 0, 'https://scontent.fcph3-1.fna.fbcdn.net/v/t31.0-8/20615965_10213965408517453_2719575564587066371_o.jpg?oh=734f0b6fa559bb29a8104555f806e89c&oe=5B18F176', 'Dongerdyret69')");
            migrationBuilder.Sql(
                "INSERT INTO KaleProfiles (KaleProfileId, Name, TotaleKaleLevel, PictureUrl, Description) " +
                "VALUES (2,'Osvald', 0, 'https://scontent.fcph3-1.fna.fbcdn.net/v/t1.0-9/1623792_10202361982843559_1922677034_n.jpg?oh=cf987b902137c45138714ad6f9e85a0d&oe=5B120F9F', 'Dongerdyret69')");
            migrationBuilder.Sql(
                "INSERT INTO KaleProfiles (KaleProfileId, Name, TotaleKaleLevel, PictureUrl, Description) " +
                "VALUES (3,'Michael', 0, 'https://scontent.fcph3-1.fna.fbcdn.net/v/t1.0-9/10410498_10206603905229152_5396817628895077757_n.jpg?oh=fa167e5157821fb6624c3e1c9f0cdea7&oe=5B10C441', 'Dongerdyret69')");
            migrationBuilder.Sql(
                "INSERT INTO KaleProfiles (KaleProfileId, Name, TotaleKaleLevel, PictureUrl, Description) " +
                "VALUES (4,'Kasper', 0, 'https://scontent.fcph3-1.fna.fbcdn.net/v/t31.0-8/14196190_10209500369933787_7331726868858729821_o.jpg?oh=3c42267f4b36beb5499083a3d9f570d0&oe=5B08D8EE', 'Dongerdyret69')");
            migrationBuilder.Sql("SET IDENTITY_INSERT KaleProfiles OFF");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("SET IDENTITY_INSERT KaleProfiles ON");

            migrationBuilder.Sql("DELETE FROM KaleProfiles WHERE KaleProfileId=1");
            migrationBuilder.Sql("DELETE FROM KaleProfiles WHERE KaleProfileId=2");
            migrationBuilder.Sql("DELETE FROM KaleProfiles WHERE KaleProfileId=3");
            migrationBuilder.Sql("DELETE FROM KaleProfiles WHERE KaleProfileId=4");

            migrationBuilder.Sql("SET IDENTITY_INSERT KaleProfiles OFF");

        }
    }
}
