import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public rolesUser:string

  constructor() { }

  ngOnInit() {
    this.rolesUser = "collaborateur"
    //this.rolesUser = "administrateur"
    //this.rolesUser = "chauffeur"
  }

}
