import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/student.service';
import { Students } from 'src/app/students/students';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  id!: number;
  student!: Students;

  constructor(
    public studentService: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe((data: Students)=>{
      this.student = data;
    });
  }

}
