import { Component, OnInit, ViewChild } from '@angular/core';
import { JsontoDatePipe } from '../shared/pipe/jsonto-date.pipe'
import { SlicePipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes, Router } from '@angular/router';
import { Annonce } from '../shared/domain/annonce';
import { AnnonceCovoiturageService } from '../shared/service/annonce-covoiturage.service';
@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit {
  
  @ViewChild('content') content;
  
    public mesAnnoncesJSON:any[] = []
    public mesAnnoncesCourrantesJSON:any[] = []
    public mesAnnoncesHistoriquesJSON:any[] = []
    public mesAnnoncesOnDisplay:any[] = []
  
    //pagination
    public totalItemsHistorique:number;
    public nbHistoriqueDisplayed:number;
    public currentPageHistorique:number;
    public previousPageHistorique:number;
  
    //Détail courrant la reservation Covoiturage
    public detailCourant:any = null;
  
    constructor(private annonceCovoitService:AnnonceCovoiturageService, private modalService: NgbModal, private router:Router) {
      this.nbHistoriqueDisplayed = 4
      this.currentPageHistorique = 1;
      this.previousPageHistorique = 1;
    }
  
    ngOnInit() {
      this.annonceCovoitService.listeMesAnnonces(JSON.parse(localStorage.getItem('personneEtAccount')).idPersonne)
      .subscribe(
        annonce=>{
          this.mesAnnoncesJSON = annonce
          this.mesAnnoncesJSON.sort(this.compare)
          this.setListeCourrantEtHistorique()
        },
        err=>{
          this.mesAnnoncesJSON = []
          this.setListeCourrantEtHistorique()
        }
      )
    }
  
    private setListeCourrantEtHistorique():void{
      this.mesAnnoncesCourrantesJSON = this.mesAnnoncesJSON.filter(a=>{
        let value = a.dateDepart
        let d = new JsontoDatePipe().transform(value)
        if(d.getTime() > Date.now()){
          return true
        }
        return false
      })
  
      this.mesAnnoncesHistoriquesJSON = this.mesAnnoncesJSON.filter(a=>{
        let value = a.dateDepart
        let d = new JsontoDatePipe().transform(value)
        if(d.getTime() < Date.now()){
          return true
        }
        return false
      })
      .reverse()
      this.totalItemsHistorique = this.mesAnnoncesHistoriquesJSON.length
      this.changerDisplayHistorique();
    }
  
    loadHistorique(page:number){
      if (page !== this.previousPageHistorique) {
        this.previousPageHistorique = page;
        this.changerDisplayHistorique();
      }
    }
    changerDisplayHistorique() {
      this.mesAnnoncesOnDisplay = new SlicePipe().transform(this.mesAnnoncesHistoriquesJSON, (this.currentPageHistorique-1) * this.nbHistoriqueDisplayed, this.currentPageHistorique * this.nbHistoriqueDisplayed)
    }
  creerAnnonce(){
    this.router.navigateByUrl("collaborateur/annonces/creer")
  }
  compare(a, b) {
    let dateA:Date = new JsontoDatePipe().transform(a.dateDepart)
    let dateB:Date = new JsontoDatePipe().transform(b.dateDepart)
    if ( dateA.getTime() > dateB.getTime())
      return 1;
    if (dateA.getTime() < dateB.getTime())
      return -1;
    return 0;
  }

}
