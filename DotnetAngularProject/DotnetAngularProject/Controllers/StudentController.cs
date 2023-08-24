using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DotnetAngularProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        public List<string> Student = new List<string>()
        {
            "Dhanraj","Suraj","Raj"
        };

        [HttpGet]
        public List<string> GetStudent()
        {
            return Student;
        }
    }
}
