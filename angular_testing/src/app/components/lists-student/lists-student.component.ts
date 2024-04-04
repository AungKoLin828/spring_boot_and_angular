import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { StudentsService } from 'src/app/services/student.service';
import { Students } from 'src/app/students/students';

@Component({
  selector: 'app-lists-student',
  templateUrl: './lists-student.component.html',
  styleUrls: ['./lists-student.component.css']
})
export class ListsStudentComponent implements OnInit {

  student : Students[] = [];

  constructor(public studentsService:StudentsService) { }

  ngOnInit(): void {
    this.studentsService.getStudentList().subscribe((data: Students[])=>{
      this.student = data;
      console.log(this.student);
    })
  }

  deleteStudent(id:number){

    if(confirm("Are you sure to delete?")){

          this.studentsService.deleteStudent(id).subscribe(res => {
          this.student = this.student.filter(stu => stu.id !== id);
          console.log('Student deleted successfully!');
          this.ngOnInit();
      })

    }
    return of({});
  }

}
