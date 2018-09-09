import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private firebase: AngularFireDatabase) { }
  studentList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('',Validators.required),
    age: new FormControl('', [Validators.required,Validators.maxLength(3)]),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('',[Validators.required, Validators.minLength(8)]),
    school: new FormControl('', Validators.required)
  });

  getStudents(){
    this.studentList = this.firebase.list('students');
    return this.studentList.snapshotChanges();
  }

  insertStudent(student){
    this.studentList.push({
      name: student.name,
      age: student.age,
      email: student.email,
      mobile: student.mobile,
      school: student.school
    });
  }

  populateForm(student){
    this.form.setValue(student);
  }

  updateStudent(student){
    this.studentList.update(student.$key,
      {
        name: student.name,
        age: student.age,
        email: student.email,
        mobile: student.mobile,
        school: student.school        
      });
  }

  deleteStudent($key: string){
    this.studentList.remove($key);
  }

}
