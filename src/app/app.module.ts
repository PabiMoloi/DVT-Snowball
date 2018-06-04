import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { AngularFireAuthModule} from 'angularfire2/auth';
import {auth} from 'firebase/app'
import * as firebase from 'firebase/app'
//require('firebase/auth')
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {environment} from '../environments/environment';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { UserListComponent } from './user-list/user-list.component'

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  {path: 'snowball-portal', component: AdminportalComponent},
  { path: '', component: LoginComponent},
 
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminportalComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
