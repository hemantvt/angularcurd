import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
submitted: boolean = false;
invalidLogin: boolean = false;

  constructor( private auth: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
onSubmit(){

  this.submitted = true;
  if ( this.loginForm.invalid) {
    return;
  }
  if(this.loginForm.controls.email.value === 'hemant@gmail.com' && this.loginForm.controls.password.value === 'password') {
    this.router.navigate(['list-user']);
}else {
  this.invalidLogin = true;
}
}
}
