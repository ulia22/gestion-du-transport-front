import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../shared/service/reservation.service'
import { JsontoDatePipe } from '../shared/pipe/jsonto-date.pipe'
import { SlicePipe } from '@angular/common';
import { concat } from 'rxjs/observable/concat';

@Component({
  selector: 'app-liste-des-reservations-vehicules',
  templateUrl: './liste-des-reservations-vehicules.component.html',
  styleUrls: ['./liste-des-reservations-vehicules.component.css']
})
export class ListeDesReservationsVehiculesComponent implements OnInit {


  public isCollapsed1 = false;
  public listeReservations:any[] = []
  public listeReservationsVehiculesCourrantes:any[] = []
  public listeReservationsVehiculesHistoriques:any[] = []
  public listeResVehiculesOnDisplay:any[] = []
  
    //pagination
    public totalItemsHistorique:number;
    public nbHistoriqueDisplayed:number;
    public currentPageHistorique:number;
    public previousPageHistorique:number;
    
    //Boolean collapse
    public isCollapsedListeReservation:boolean;
  
    //Détail courrant la reservation Covoiturage
    public detailCourant:any = null;
    
  constructor(private reservationService:ReservationService) {
      this.nbHistoriqueDisplayed = 4
      this.currentPageHistorique = 1;
      this.previousPageHistorique = 1;
   }

  ngOnInit() {
    console.log(JSON.parse(localStorage.getItem('personneEtAccount')).idPersonne)
    this.reservationService.getListeReservationsVehicules(1)
    .subscribe(
      resp=>{
        this.listeReservations = resp
     
        this.setListeCourrantEtHistorique()
      },
      err=>{
        this.listeReservations = []
        this.setListeCourrantEtHistorique()
      }
    )

  }
  private setListeCourrantEtHistorique():void{
 
    this.listeReservationsVehiculesCourrantes = this.listeReservations.filter(r=>{
      let value = r.reservation
      let d = new JsontoDatePipe().transform(value)
      if(d.getTime() > Date.now()){
        return true
      }
      return false
    })
   
    this.listeReservationsVehiculesHistoriques = this.listeReservations.filter(r=>{
      
      let value = r.reservation
      let d = new JsontoDatePipe().transform(value)
      if(d.getTime() < Date.now()){
        return true
      }
      return false
    })
    .reverse()
    this.totalItemsHistorique = this.listeReservationsVehiculesHistoriques.length
    this.changerDisplayHistorique();
  }
  loadHistorique(page:number){
    if (page !== this.previousPageHistorique) {
      this.previousPageHistorique = page;
      this.changerDisplayHistorique();
    }
  }
  changerDisplayHistorique() {
    this.listeResVehiculesOnDisplay = new SlicePipe().transform(this.listeReservationsVehiculesHistoriques, (this.currentPageHistorique-1) * this.nbHistoriqueDisplayed, this.currentPageHistorique * this.nbHistoriqueDisplayed)
   
  }

  



}
