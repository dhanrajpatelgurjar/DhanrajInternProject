using Microsoft.AspNetCore.Mvc;

namespace DotnetAngularProject.Controllers
{
    [ApiController]
    [Route("[controller]")] 
    public class StudentController : Controller
    {
        static List<string> student = new List<string>()
        {
            "Dhanraj", "Suraj", "Raj"
        };

        [HttpGet]
        public List<string> Get()
        {
            return student;
        }
        [HttpGet("{Id}")]
        public string Get(int id)
        {
            return student.ElementAt(id);
        }
        

    }
}
