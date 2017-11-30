import { Component, OnInit ,Input } from '@angular/core';
import { bootstrap } from 'bootstrap';
import {NgbTimeStruct ,NgbModal, ModalDismissReasons, NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
import { AnnonceCovoiturageService } from '../shared/service//annonce-covoiturage.service'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { JsontoDatePipe } from '../shared/pipe/jsonto-date.pipe';

import {VehiculeService} from "../shared/service/vehicule.service"
import {Vehicule} from "../shared/domain/vehicule"
import { Reservation } from '../shared/domain/reservation';
import { ReservationService } from '../shared/service/reservation.service';

const address = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado']
@Component({
  selector: 'app-reserver-un-vehicules-de-societe',
  templateUrl: './reserver-un-vehicules-de-societe.component.html',
  styleUrls: ['./reserver-un-vehicules-de-societe.component.css'],
  providers:[NgbTypeaheadConfig]
})
export class ReserverUnVehiculesDeSocieteComponent implements OnInit {

  //Partie reserver Covoiturage
  public model: any;
  public annonceSelected:any = null;
  //*********************///

  datePickerReservation;
  datePickerRetour;
  datePickerDepart;

  timeReserve: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  hourStepReserve = 1;
  minuteStepReserve = 10;

  timeRetour: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  hourStepRetour = 1;
  minuteStepRetour = 10;

  public isCollapsed = true;
  public isCollapsed1 = false;

  stringImmatriculation =""
  stringMarque=""
  stringModele=""

  closeResult: string;

  @Input()  vehicules:Vehicule[]
  public annonces:any[]
  public annoncesOnDisplay:any[]

  constructor(private modalService: NgbModal,public vehiculeService:VehiculeService , config: NgbTypeaheadConfig, public reservationService:ReservationService, public annoncesCovoitService:AnnonceCovoiturageService) {
    config.showHint = true;
  }

  open(content , immatriculation , marque , modele) {
    this.modalService.open(content).result.then((result) => {
      ;
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      ;
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    this.stringImmatriculation = immatriculation;
    this.stringMarque = marque;
    this.stringModele = modele;
  }

  search = (text$: Observable<string>) => {
    text$
    .debounceTime(200)
    .distinctUntilChanged()
    .map(term => term.length < 2 ? []
      : address.filter(v => v.toLowerCase().startsWith(term.toLocaleLowerCase())).splice(0, 10));
    }

    ngOnInit() {
      this.vehiculeService.getListVehicule().subscribe(l=>{this.vehicules=l})
      this.annoncesCovoitService.getListAnnoncesCovoiturage(JSON.parse(localStorage.getItem('personneEtAccount')).idPersonne).subscribe(l=>this.annonces = l)
    }

  add(dateReservationDay,dateReservationMonth, dateReservationYear ,timeReserveHour ,timeReserveMinute,
    dateRetourDay,dateRetourMonth,dateRetourYear,timeRetourHour,timeRetourMinute,
    dateReservation,dateRetour,immatriculation,marque,modele){

     const depart = null ; //dateReservationDay+ "/" + dateReservationMonth + "/" + dateReservationYear ;

     const retour =null; // dateRetourDay+ "/" + dateRetourMonth + "/" + dateRetourYear;
    console.log(immatriculation +"toto")
    const reservation = new Reservation( marque ,immatriculation,modele ,depart, retour);

    this.reservationService.sauvegarde(reservation)

  }

    openReservCovoit(content2, annonce){
      console.log("Bouh"+JSON.stringify(annonce))
      this.annonceSelected = annonce
      this.modalService.open(content2)
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    displayCovoit(addDepart:HTMLInputElement,  addDestination:HTMLInputElement, dateDepart:HTMLInputElement){
      if(addDepart.value.length > 0){
        this.annoncesOnDisplay = this.annonces.filter(a=>a.addrDepart.toLowerCase().includes(addDepart.value.toLowerCase()))
        if(addDestination.value.length>0){
          this.annoncesOnDisplay = this.annoncesOnDisplay.filter(a=>a.addrArrivee.toLowerCase().includes(addDestination.value.toLowerCase()))
        }
        if(dateDepart.value.length>0 && new Date(dateDepart.value) && new Date(dateDepart.value).getTime() > Date.now()){
          this.annoncesOnDisplay = this.annoncesOnDisplay.filter(a=>{
            let date = new JsontoDatePipe().transform(a.dateDepart)
            return (date.getDay() == new Date(dateDepart.value).getDay() && date.getMonth() == new Date(dateDepart.value).getMonth() && date.getFullYear() == new Date(dateDepart.value).getFullYear())
          })
        }
      }else{
        this.annoncesOnDisplay = [];
      }

    }
  }
