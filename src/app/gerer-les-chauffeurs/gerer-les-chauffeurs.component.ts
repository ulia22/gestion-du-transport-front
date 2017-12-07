import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ChauffeurService} from '../shared/service/chauffeur.service'

@Component({
  selector: 'app-gerer-les-chauffeurs',
  templateUrl: './gerer-les-chauffeurs.component.html',
  styleUrls: ['./gerer-les-chauffeurs.component.css']
})
export class GererLesChauffeursComponent implements OnInit {
  @ViewChild('content') content;

  public mesChauffeursJSON:any[]=[]
  public chauffeurAffiche:any[]=[]

  //Filtres
  public matricule:string=""
  public nom:string=""
  public prenom:string=""

  constructor(private modalService: NgbModal, private chauffeurService:ChauffeurService) { }

  ngOnInit():void{
    this.actualiserDonneLocale()
  }

  actualiserDonneLocale():void{
    this.chauffeurService.getChauffeursList()
    .subscribe(
      chauffeurs=>{
        this.mesChauffeursJSON = chauffeurs
        this.actualiserAffichage()
      },
      err=>{
        this.mesChauffeursJSON = []
      }
    )
  }

  openModalAjouterChauffeur():void{
    this.modalService.open(this.content)
  }

  ajouterChauffeur(matricule:HTMLInputElement):void{
    this.chauffeurService.ajouterChauffeur(matricule.value).subscribe(
      chauffeurs=>{
        this.mesChauffeursJSON = chauffeurs
        this.actualiserAffichage()
      }
    )
  }

  lireValeurFiltres(champMatricule:HTMLInputElement, champNom:HTMLInputElement, champPrenom:HTMLInputElement):void{
    this.matricule = champMatricule.value
    this.nom = champNom.value
    this.prenom = champPrenom.value
    this.actualiserAffichage()
  }

  actualiserAffichage(){
    if(this.matricule.length > 0){
      this.chauffeurAffiche = this.mesChauffeursJSON.filter(chauffeur=>chauffeur.matricule.toLocaleLowerCase().includes(this.matricule.toLocaleLowerCase()))
    }
    if(this.nom.length > 0){
        this.chauffeurAffiche = this.mesChauffeursJSON.filter(chauffeur=>chauffeur.nom.toLocaleLowerCase().includes(this.nom.toLocaleLowerCase()))
    }
    if(this.prenom.length > 0){
      this.chauffeurAffiche = this.mesChauffeursJSON.filter(chauffeur=>chauffeur.prenom.toLocaleLowerCase().includes(this.prenom.toLocaleLowerCase()))
    }
    if(this.matricule.length == 0 &&
      this.nom.length == 0 &&
      this.prenom.length == 0){
        this.chauffeurAffiche = this.mesChauffeursJSON
      }
  }

}
