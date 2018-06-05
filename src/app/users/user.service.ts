import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {User} from'./user.model';
import {auth} from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: AngularFireList<any>;
 public currentUser: User = new User();

  constructor(private firebase: AngularFireDatabase,private angularFireAuth: AngularFireAuth) { }

  getUsers(){
    this.userList = this.firebase.list('users');
    return this.userList;
  }

  insertUser(user: User){
    if(!this.userList){
      this.userList = this.getUsers();
    }
    this.userList.push({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      password: user.password,
      activeProfile: true
    });
  const scope = this; 
  this.angularFireAuth.auth.createUserWithEmailAndPassword(user.username,user.password);
  }

  updateUser(user: User){
    this.userList.update(user.$key,{
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      password: user.password,
      activeProfile: true
    });
    console.log("update function called");
  }

  deleteUser($key: string){
    this.userList.remove($key);
  }
  resetUserPassword(username: string){
    var auth = this.angularFireAuth.auth;

auth.sendPasswordResetEmail(username).then(function() {
  console.log("Email sent.") ;
}).catch(function(error) {
   console.log("An error happened.") ;
});
  }
}

