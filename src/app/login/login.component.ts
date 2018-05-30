import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { reject } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  loginForm: FormGroup;
  filledIn = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      loginEmail:['',[Validators.required, Validators.email]],
      loginPassword:['',Validators.required]
    });
  }
  get controller()
  {
    return this.loginForm.controls;
  }
  onLoginButtonClick(){
    console.log("function called");
    this.filledIn = true;
    console.log(this.loginForm.value);
    if (this.loginForm.invalid)
    {
      return;
    }
  }
}
