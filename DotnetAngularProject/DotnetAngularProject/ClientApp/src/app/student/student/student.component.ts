import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ServivesService from 'src/app/servives.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList: any = [];
  student:any;

  constructor(private service: ServivesService,private router : Router) {
  }
  async ngOnInit(): Promise<void> {
     this.getStudents();
  }

  async getStudents() {
    await this.service.getStudents().subscribe(respose => {
      this.studentList = respose;
    });
  }

  async GetStudentById(student :any) {
    await this.service.GetStudentById(student.id).subscribe(async respose => {
      this.student = respose;
      console.log(respose);
      
      this.router.navigate(['Student/AddStudent',student]);
    });
  }


  async Remove(id : any)
  {if (confirm('Are you sure?'+ id)) {
    await this.service.deleteStudent(id).subscribe(async data => {
      alert("Delete Sucessfull "+id);
      this.getStudents();
    })
  }
  }


  
}