using System.ComponentModel.DataAnnotations;

namespace Mission13API.Controllers.Data
{
    public class Movies
    {
        [Key]
        public int MovieID { get; set; }
        public string? Category { get; set; }

        public string? Title { get; set; }

        public int? Year { get; set; }
        public string? Director { get; set; }

        public int? Rating { get; set; }

        public string? Edited { get; set; }

        public string? LentTo { get; set; }

        public string? Notes { get; set; }
    }
}
