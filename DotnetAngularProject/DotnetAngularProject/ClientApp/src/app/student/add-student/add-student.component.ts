import { Component,Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import ServivesService from 'src/app/servives.service';
import {Router} from '@angular/router'
import { StudentComponent } from '../student/student.component';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @Input() student! : StudentComponent;
  addStudent!: FormGroup;

  constructor(private service: ServivesService,private router :Router) { }

  async ngOnInit(): Promise<void> {
    
    this.addStudent = new FormGroup({
      Name: new FormControl(''),
      Complete: new FormControl(false),
      Date: new FormControl(''),
    });
    // this.GetStudentById();
    console.log(this.student);
 }
 GetStudentById(student:any)
 {
    let updatedata = {
      Name : "Dhanraj",
      Complete : true,
      Date : "2023-08-19",
    }
    this.addStudent.setValue(updatedata);
    console.log(updatedata);
 }


 
 saveStudent() {

      this.service.addStudent(this.addStudent.value).subscribe(respose => { 
        this.router.navigate(['Student']);
       });
      
    }
    // this.router.navigate(['/Student']);

}
