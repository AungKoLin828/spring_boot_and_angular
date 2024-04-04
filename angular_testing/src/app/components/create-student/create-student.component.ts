import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  form!: FormGroup

  constructor(
    public studentService: StudentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
        name: new FormControl('',[Validators.required]),
        age: new FormControl('',[Validators.required]),
        address: new FormControl('',[Validators.required]),
        phoneNo: new FormControl('',[Validators.required])
      }
    );
  }

  get formData(){
    return this.form.controls
  }

  submit(){
    console.log(this.form.value);
    this.studentService.addStudent(this.form.value).subscribe((res:any) => {
      console.log("New Student is successfully creaded.");
      this.router.navigateByUrl('sample/index');
    })
  }

}
