using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Mission13API.Controllers.Data
{
    public class MovieDbContext: DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<Movies> Movies { get; set; }
    }
}
