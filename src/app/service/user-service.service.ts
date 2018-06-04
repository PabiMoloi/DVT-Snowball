import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import {User} from '../model/user'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userList: AngularFireList<any>;
  selectedUser: User = new User();
  
  constructor(private firebase :AngularFireDatabase) { }

  getUsers(){
    this.userList = this.firebase.list('users');
    return this.userList;
  }
  insertUser(user: User){
    this.userList.push({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      activeprofile: user.activeProfile
    });
  }

  updateUser(user: User){
    this.userList.update(user.$key,{
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password,
      activeprofile: user.activeProfile
    });
  }

  deleteUser($key: string){
    this.userList.remove($key);
  }
}
