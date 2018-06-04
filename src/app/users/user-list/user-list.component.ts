import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService) { }
  
  userList: User[];


  ngOnInit() {
    var observer = this.userService.getUsers();
    observer.snapshotChanges().subscribe(item =>{
      this.userList = [];
      item.forEach (element => {
        var jsonResponse = element.payload.toJSON();
        jsonResponse["$key"] = element.key;
        this.userList.push(jsonResponse as User);
      });
    });
  }

  onUpdate(user: User){
    this.userService.currentUser = Object.assign({},user);
  }

  onDelete(key: string){
    this.userService.deleteUser(key);
  }

}
