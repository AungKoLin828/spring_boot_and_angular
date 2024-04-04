import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsStudentComponent } from './components/lists-student/lists-student.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'sample/index', pathMatch: 'full' },
  { path: 'sample/index', component: ListsStudentComponent },
  { path: 'sample/:id/view', component: ViewStudentComponent },
  { path: 'sample/create', component: CreateStudentComponent },
  { path: 'sample/:id/edit', component: EditStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
