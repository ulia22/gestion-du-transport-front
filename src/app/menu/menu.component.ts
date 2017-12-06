import { Component, OnInit } from '@angular/core';
import { UserRolesService } from '../shared/service/user-roles.service'
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public rolesUser:string
  public navbarCollapsed:boolean = false;
  public userNom:string
  public userPrenom:string
  public srcPhotos:string

  constructor( private userRolesService:UserRolesService) { }

  ngOnInit() {
    this.rolesUser = localStorage.getItem('role')
    this.userNom = JSON.parse(localStorage.getItem('personneEtAccount')).nom
    this.userPrenom = JSON.parse(localStorage.getItem('personneEtAccount')).prenom
    this.srcPhotos = JSON.parse(localStorage.getItem('personneEtAccount')).photo
  }

  deconnexion():void{
    localStorage.clear()
  }
}
