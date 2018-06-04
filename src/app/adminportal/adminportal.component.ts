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

  addUser(){
    var x = document.getElementById("formDiv");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.display = "hidden";
    }
  }
}
