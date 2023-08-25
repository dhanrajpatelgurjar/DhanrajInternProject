using DotnetAngularProject.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DotnetAngularProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : Controller
    {
        private readonly StudentDetailContext _context;

        public StudentController(StudentDetailContext context)
        {
            _context = context;
        }

        [HttpGet("GetStudents")]
        public async Task<ActionResult<List<StudentDetail>>> Get()
        {
            var data = await _context.StudentDetails.ToListAsync();
            return Ok(data);
        }

/*
        [HttpPost("CreateStudent")]
        public async Task<ActionResult<StudentDetail>> CreateStudent(StudentDetail student)
        {
            context.StudentDetails.Add(student);
            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = student.Id }, student);
        }*/


        [HttpPost("CreateStudent")]
        public async Task<ActionResult<StudentDetail>> Post(StudentDetail student)
        {
                _context.StudentDetails.Add(student);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Get), new { id = student.Id }, student);
            
        }


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
