import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {auth} from 'firebase/app';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app'
import { environment } from '../../environments/environment';
require('firebase/auth')

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
    firebase.initializeApp(environment.config);
  }
  get controller()
  {
    return this.loginForm.controls;
  }
  onLoginButtonClick(){
    var emailAddress: string;
    var password: string;
    emailAddress = this.loginForm.controls.loginEmail.value;
    password = this.loginForm.controls.loginPassword.value;
    firebase.auth().signInWithEmailAndPassword(emailAddress,password)
    .then( function(response)  {
      console.log(response.user.uid);
      
    })
    .catch(function(error){
      console.log(error.message);
    });

    console.log("function called");
    this.filledIn = true;
    console.log(this.loginForm.value);
    
   
  }
}
