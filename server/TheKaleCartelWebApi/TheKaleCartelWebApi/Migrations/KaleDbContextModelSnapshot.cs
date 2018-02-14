﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;
using TheKaleCartelWebApi.Data;

namespace TheKaleCartelWebApi.Migrations
{
    [DbContext(typeof(KaleDbContext))]
    partial class KaleDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TheKaleCartelWebApi.Models.KaleBeer", b =>
                {
                    b.Property<int>("KaleBeerId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreationDate");

                    b.Property<string>("Description");

                    b.Property<int>("KaleProfileId");

                    b.Property<string>("Name");

                    b.Property<string>("PictureUrl");

                    b.Property<int>("Rating");

                    b.Property<int>("VolPercentage");

                    b.HasKey("KaleBeerId");

                    b.HasIndex("KaleProfileId");

                    b.ToTable("KaleBeers");
                });

            modelBuilder.Entity("TheKaleCartelWebApi.Models.KaleProfile", b =>
                {
                    b.Property<int>("KaleProfileId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Name");

                    b.Property<string>("Nickname");

                    b.Property<string>("PictureUrl");

                    b.Property<int>("TotalKaleLevel");

                    b.HasKey("KaleProfileId");

                    b.ToTable("KaleProfiles");
                });

            modelBuilder.Entity("TheKaleCartelWebApi.Models.KaleRecipe", b =>
                {
                    b.Property<int>("KaleRecipeId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CoursOfAction");

                    b.Property<DateTime>("CreationDate");

                    b.Property<int>("KaleProfileId");

                    b.Property<string>("Name");

                    b.Property<int>("Rating");

                    b.HasKey("KaleRecipeId");

                    b.HasIndex("KaleProfileId");

                    b.ToTable("KaleRecipes");
                });

            modelBuilder.Entity("TheKaleCartelWebApi.Models.KaleBeer", b =>
                {
                    b.HasOne("TheKaleCartelWebApi.Models.KaleProfile", "KaleProfile")
                        .WithMany("KaleBeers")
                        .HasForeignKey("KaleProfileId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("TheKaleCartelWebApi.Models.KaleRecipe", b =>
                {
                    b.HasOne("TheKaleCartelWebApi.Models.KaleProfile", "KaleProfile")
                        .WithMany("KaleRecipes")
                        .HasForeignKey("KaleProfileId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
