import { Component, OnInit } from '@angular/core';
import { UserRolesService } from '../shared/service/user-roles.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public rolesUser:string

  constructor( private userRolesService:UserRolesService) { }

  ngOnInit() {
    this.rolesUser = this.userRolesService.sessionRole
    //this.rolesUser = "administrateur"
    //this.rolesUser = "chauffeur"
  }

}
