import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../shared/service/reservation.service'
import { JsontoDatePipe } from '../shared/pipe/jsonto-date.pipe'
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-liste-des-reservations',
  templateUrl: './liste-des-reservations.component.html',
  styleUrls: ['./liste-des-reservations.component.css']
})
export class ListeDesReservationsComponent implements OnInit {

  public listeReservationsJSON:any[] = []
  public listeReservationsAnnoncesCourrantesJSON:any[] = []
  public listeReservationsAnnoncesHistoriquesJSON:any[] = []
  public listeResAnnOnDisplay:any[] = []

  //pagination
  public totalItemsHistorique:number;
  public nbHistoriqueDisplayed:number;
  public currentPageHistorique:number;
  public previousPageHistorique:number;

  constructor(private reservationService:ReservationService) {
    this.nbHistoriqueDisplayed = 4
    this.currentPageHistorique = 1;
    this.previousPageHistorique = 1;
  }

  ngOnInit() {
    this.reservationService.getListeReservations(JSON.parse(localStorage.getItem('personneEtAccount')).idPersonne)
    .subscribe(
      resp=>{

        this.listeReservationsJSON = resp
        this.setListeCourrantEtHistorique()
      },
      err=>{
        this.listeReservationsJSON = []
        this.setListeCourrantEtHistorique()
      }
    )
  }

  private setListeCourrantEtHistorique():void{
    this.listeReservationsAnnoncesCourrantesJSON = this.listeReservationsJSON.filter(r=>{
      let value = r.dateDepart
      let d = new JsontoDatePipe().transform(value)
      if(d.getTime() > Date.now()){
          console.log("Bouh"+r.dateDepart)
        return true
      }
      return false
    })

    this.listeReservationsAnnoncesHistoriquesJSON = this.listeReservationsJSON.filter(r=>{
      let value = r.dateDepart
      let d = new JsontoDatePipe().transform(value)
      if(d.getTime() < Date.now()){
        return true
      }
      return false
    })
    this.totalItemsHistorique = this.listeReservationsAnnoncesHistoriquesJSON.length
    this.changerDisplayHistorique();
  }

  loadHistorique(page:number){
    if (page !== this.previousPageHistorique) {
          this.previousPageHistorique = page;
          this.changerDisplayHistorique();
        }
  }
  changerDisplayHistorique() {
    this.listeResAnnOnDisplay = new SlicePipe().transform(this.listeReservationsAnnoncesHistoriquesJSON, (this.currentPageHistorique-1) * this.nbHistoriqueDisplayed, this.currentPageHistorique * this.nbHistoriqueDisplayed)
  }
}
