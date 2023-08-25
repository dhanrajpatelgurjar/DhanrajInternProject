import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class ServivesService {

  constructor(private http : HttpClient) { }

  getStudents() {
    // return this.http.get(`${this.apiUrl}Student/GetStudents`);
    return this.http.get('https://localhost:7192/Student/GetStudents');
  }


}
