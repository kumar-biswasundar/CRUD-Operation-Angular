import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'] // Corrected property name to styleUrls
})
export class UpdateStudentComponent implements OnInit {
  s_id: number = 0;
  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.s_id = this.route.snapshot.params['s_id'];

    this.studentService.getStudentById(this.s_id).subscribe(
      (data) => {
        this.student = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.studentService.updateStudentById(this.s_id, this.student).subscribe(
      (data) => {
        this.goToStudentList();
      },
      (error) => console.log(error)
    );
  }

  goToStudentList() {
    this.router.navigate(['/students']);
  }
}
