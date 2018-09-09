import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  form = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('',Validators.required),
    age: new FormControl('', [Validators.required,Validators.maxLength(3)]),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('',[Validators.required, Validators.minLength(8)]),
    school: new FormControl('', Validators.required)
  });
}
