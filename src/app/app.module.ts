import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {auth} from 'firebase/app'
import * as firebase from 'firebase/app'
require('firebase/auth')


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {environment} from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
