﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using final.wwwapi.Data;

#nullable disable

namespace final.wwwapi.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.12")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("final.wwwapi.Models.Plant", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<int>("dayfrequency")
                        .HasColumnType("integer");

                    b.Property<DateTime>("lastWatered")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("place")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("userId")
                        .HasColumnType("integer");

                    b.HasKey("id");

                    b.ToTable("Plants");
                });

            modelBuilder.Entity("final.wwwapi.Models.User", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("id"));

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
