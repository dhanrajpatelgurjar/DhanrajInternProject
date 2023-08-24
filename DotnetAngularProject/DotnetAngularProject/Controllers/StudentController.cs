using Microsoft.AspNetCore.Mvc;

namespace DotnetAngularProject.Controllers
{
    [ApiController]
    [Route("[controller]")] 
    public class StudentController : Controller
    {
        [HttpGet]
        public string Get()
        {
            return "Hello Dhanraj";
        }

    }
}
