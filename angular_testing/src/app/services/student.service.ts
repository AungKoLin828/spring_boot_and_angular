import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Students } from '../students/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  readonly APIUrl = 'http://localhost:8080/sample/api/student'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  getStudentList():Observable<any>{
    console.log('All Students Lists');
    return this.http.get(this.APIUrl + '/list-all')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  addStudent(student:Students): Observable<any>{
    console.log('Add New Student');
    return this.http.post<Students>(this.APIUrl + '/add/', JSON.stringify(student), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  updateStudent(student:Students){
    console.log('Updated Student');
    return this.http.put(this.APIUrl + '/update/' , JSON.stringify(student), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteStudent(id: number){
    console.log('Deleted Student');
    return this.http.delete(this.APIUrl + '/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getStudentById(id: number):Observable<any>{
    return this.http.get<any>(this.APIUrl + '/' + id);
  }

  errorHandler(error :any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
