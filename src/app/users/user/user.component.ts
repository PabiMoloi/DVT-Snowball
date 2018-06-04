import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  onRegisterClick(userForm: NgForm){
    if (userForm.value.$key == null)
      this.userService.insertUser(userForm.value);
    else
      this.userService.updateUser(userForm.value);
  }
}
