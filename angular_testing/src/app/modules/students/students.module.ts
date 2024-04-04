import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ListsStudentComponent } from 'src/app/components/lists-student/lists-student.component';
import { EditStudentComponent } from 'src/app/components/edit-student/edit-student.component';
import { CreateStudentComponent } from 'src/app/components/create-student/create-student.component';
import { ViewStudentComponent } from 'src/app/components/view-student/view-student.component';

@NgModule({
  declarations: [ListsStudentComponent, ViewStudentComponent, CreateStudentComponent, EditStudentComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class StudentsModule { }
