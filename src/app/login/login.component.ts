import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {auth} from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, public route: ActivatedRoute, public router: Router, private af: AngularFireAuth ) { }

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
    var emailAddress: string;
    var password: string;
    const scope = this;
    emailAddress = this.loginForm.controls.loginEmail.value;
    password = this.loginForm.controls.loginPassword.value;
    this.af.auth.signInWithEmailAndPassword(emailAddress,password)
    .then( function(response)  {
      scope.router.navigate(['snowball-portal']);
    })
    .catch(function(error){
      console.log(error.message);
    });
  }
}
