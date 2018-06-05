import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addUserClick(){
    var x = document.getElementById("formDiv");
    x.style.display="block";
  }

}
