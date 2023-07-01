import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent  implements OnInit {
  registrationForm :FormGroup;
  constructor(private fb : FormBuilder) {    
  }
  ngOnInit(): void {
 this.CreateRegistrationForm();
  }
  CreateRegistrationForm() {
    this.registrationForm =  this.fb.group({
      userName : new FormControl(null,Validators.required),
      email : new  FormControl(null,[Validators.required,Validators.email]),
      password : new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmPassword: new FormControl(null,[Validators.required]),
      mobile : new FormControl(null,[Validators.required,Validators.maxLength(10)])
    },
     {
      validators : this.matchingPasswordMatching,
     }
    );
  }
  OnSubmit(){
    console.log(this.registrationForm);
  }
  matchingPasswordMatching(fg:FormGroup) :Validators | any{
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null : {notMatched : true};
  }
  getUserName() {
    return this.registrationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
}
