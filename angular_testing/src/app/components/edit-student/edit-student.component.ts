import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/student.service';
import { Students } from 'src/app/students/students';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id!: number;
  student!: Students;
  form!: FormGroup

  constructor(
    public studentService: StudentsService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    console.log("Init Starting" + this.id);
    this.studentService.getStudentById(this.id).subscribe((data: Students)=>{
      this.student = data;
    });

    this.form = new FormGroup({
        name: new FormControl('',[Validators.required]),
        age: new FormControl('',[Validators.required]),
        address: new FormControl('',[Validators.required]),
        phoneNo: new FormControl('',[Validators.required])
    });
  }

  get formData(){
    return this.form.controls
  }

  submit(){
    console.log(this.form.value);
    this.studentService.updateStudent(this.student).subscribe((res:any) => {
      console.log("Student is successfully updated.");
      this.router.navigateByUrl('sample/index');
    })
  }

}
