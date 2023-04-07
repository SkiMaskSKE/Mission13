using Microsoft.AspNetCore.Mvc;
using Mission13API.Controllers.Data;

namespace Mission13API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDbContext context;
        public MovieController(MovieDbContext temporary)
        {
            context = temporary;
        }
        public IEnumerable<Movies> Get()
        {
            var x = context.Movies
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();

            return x;
        }

    }
}
