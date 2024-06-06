import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Student[] = [];
  searchQuery: string = '';
  searchText:any;



  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getStudent();
  }

  private getStudent() {
    this.studentService.getStudentList().subscribe(data => {
      this.students = data;
    });
  }

 

  studentDetails(s_id: number) {
    this.router.navigate(['student-details', s_id]);
  }

  updateStudent(s_id: number) {
    this.router.navigate(['update-student', s_id]);
  }

  deleteStudent(s_id: number) {
    this.studentService.deleteStudentById(s_id).subscribe(data => {
      console.log(data);
      this.getStudent(); // Refresh student list after deletion
    });
  }
}
