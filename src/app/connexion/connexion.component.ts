import { Component, OnInit,ViewChild } from '@angular/core';
import { ConnexionService } from '../shared/service/connexion.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { UserRolesService } from '../shared/service/user-roles.service'
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public errorMessage:string;
  public objectJSONUser:any;
  public closeResult: string;

  @ViewChild('content') content;

  constructor(private connexionService:ConnexionService, private modalService: NgbModal, private userRolesService:UserRolesService, private router:Router) { }

  ngOnInit() {}

  send(mail:HTMLInputElement, pass:HTMLInputElement){
    this.connexionService.getCurrentUser(mail.value, pass.value).subscribe(
      resp =>{
      this.objectJSONUser = resp
      this.open(this.content)
    },
    err =>{
      console.error(err)
      this.errorMessage = err.error.message
      setTimeout(()=>this.errorMessage = null, 3000)
    })
    return false
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

 private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else if(reason == "CHAUFFEUR" || reason == "COLLABORATEUR" || reason == "ADMINISTRATEUR"){
      this.setUserRoles(reason)
    }else {
      return  `with: ${reason}`;
    }
  }

  private setUserRoles(role:string):void{
    this.userRolesService.sessionRole = role;
    if(role == 'COLLABORATEUR'){
      this.router.navigateByUrl('collaborateur/reservations')
    }else if(role == 'ADMINISTRATEUR'){
      this.router.navigateByUrl('admin/vehicules')
    }else if(role == 'CHAUFFEUR'){
      this.router.navigateByUrl('chauffeur/planning')
    }
  }
}
