import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  deleteStudent(s_id: number) {
    throw new Error('Method not implemented.');
  }
  private baseURL = "http://localhost:8090/students";

  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseURL); // Removed the $ sign
  }
  createStudent (student: Student): Observable<object>{
    return this.httpClient.post(this.baseURL,student);

}
getStudentById(s_id: number): Observable<Student>{
  return this.httpClient.get<Student>(`${this.baseURL}/${s_id}`);}

updateStudentById(s_id: number, student: Student): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${s_id}`, student,{
    headers:new HttpHeaders ({
      'Content-Type':'application/json'
    })
  });
}

deleteStudentById(s_id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${s_id}`);
}
}
