using DotnetAngularProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotnetAngularProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : Controller
    {
        private readonly StudentDetailContext context;

        public StudentController(StudentDetailContext context)
        {
            this.context = context;
        }

        [HttpGet("GetStudents")]
        public async Task<ActionResult<List<StudentDetail>>> GetStudents()
        {
            var data = await context.StudentDetails.ToListAsync();
            return Ok(data);
        }

        [HttpPost("CreateStudent")]
        public async Task<ActionResult<StudentDetail>> CreateStudent(StudentDetail student)
        {
            if (ModelState.IsValid)
            {
                context.StudentDetails.Add(student);
                await context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetStudents), new { id = student.Id }, student);
            }
            return BadRequest(ModelState);
        }






        /* [HttpPost("CreateStudent")]
         public async Task<ActionResult<StudentDetail>> CreateStudent(StudentDetail student)
         {
             context.StudentDetails.Add(student);
             await context.SaveChangesAsync();
             return student;
         }*/





        /*static List<string> student = new List<string>()
        {
            "Dhanraj", "Suraj", "Raj","Patel"
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
        }*/



    }
}
