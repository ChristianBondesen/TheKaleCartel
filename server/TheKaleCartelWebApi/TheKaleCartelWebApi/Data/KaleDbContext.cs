using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TheKaleCartelWebApi.Models;

namespace TheKaleCartelWebApi.Data
{
    public class KaleDbContext : DbContext
    {
        public KaleDbContext(DbContextOptions<KaleDbContext> options) : base(options) { }

        public DbSet<KaleProfile> KaleProfiles { get; set; }
        public DbSet<KaleBeer> KaleBeers { get; set; }
        public DbSet<KaleRecipe> KaleRecipes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseSqlServer(
                @"Server=tcp:thekalecartel.database.windows.net,1433;Initial Catalog=TheKaleCartel;Persist Security Info=False;
                        User ID=christianbondesen;
                        Password=Gbv88jak;
                        MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
        }
    }
}
