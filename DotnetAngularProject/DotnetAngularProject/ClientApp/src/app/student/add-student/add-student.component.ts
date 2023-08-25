import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import ServivesService from 'src/app/servives.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private service: ServivesService) { }

  async ngOnInit(): Promise<void> {
 }
  AddStudent = new FormGroup({
    Name: new FormControl(''),
    Complete: new FormControl(''),
    Date: new FormControl(''),
  });
  postStudents()
  {
    
  }


}
