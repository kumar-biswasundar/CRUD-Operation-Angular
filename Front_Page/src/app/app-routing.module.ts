import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
const routes: Routes = [

  {path:'students',component:StudentListComponent},
  {path:'create-student',component:CreateStudentComponent},
  {path:'',redirectTo:'students',pathMatch:'full'},
  {path:'update-student/:s_id',component:UpdateStudentComponent},
  {path: 'student-details/:s_id', component: StudentDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
