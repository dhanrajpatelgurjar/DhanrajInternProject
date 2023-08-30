import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export default class ServivesService {
  remove(id: any) {
    throw new Error('Method not implemented.');
  }
  apiUrl = 'https://localhost:7192';
  constructor(private http : HttpClient) { }
  
  
  getStudents() {
    return this.http.get(`${this.apiUrl}/Student/GetStudents`);
  }
  
  addStudent(body:any) {
    return this.http.post(`${this.apiUrl}/Student/CreateStudents` , body);
  }

  deleteStudent(Id:any)
  {
    return this.http.delete(`${this.apiUrl}/Student/DeleteStudents/`+Id);
  }
  editStudent(id :any,data:any)
  {
    return this.http.put(`${this.apiUrl}/Student/EditStudent/`+id, data);
  }

  GetStudentById(id :any)
  {
    return this.http.get(`${this.apiUrl}/Student/GetStudentById/`+id);

  }
}
