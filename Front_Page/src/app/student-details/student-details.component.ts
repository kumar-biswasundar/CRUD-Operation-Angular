import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {

  s_id: number=0;
  student: Student= new Student();
  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.s_id = this.route.snapshot.params['s_id'];

    this.student= new Student();
    this.studentService.getStudentById(this.s_id).subscribe( data => {
      this.student = data;
    });
  }
}