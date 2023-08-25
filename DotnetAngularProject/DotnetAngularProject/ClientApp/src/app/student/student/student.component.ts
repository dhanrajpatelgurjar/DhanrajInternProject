import { Component, Inject, OnInit } from '@angular/core';
import ServivesService from 'src/app/servives.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentList: any = [];


  constructor(private service: ServivesService) {
  }
  async ngOnInit(): Promise<void> {
     this.getStudents();
  }

  getStudents() {
    this.service.getStudents().subscribe(respose => {
      this.studentList = respose;
    });
  }
}