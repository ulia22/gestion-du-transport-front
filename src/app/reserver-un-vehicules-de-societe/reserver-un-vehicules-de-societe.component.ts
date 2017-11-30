import { Component, OnInit ,Input } from '@angular/core';
import {NgbTimeStruct ,NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { bootstrap } from 'bootstrap';
import {VehiculeService} from "../shared/service/vehicule.service"
import {Vehicule} from "../shared/domain/vehicule"
import { Reservation } from '../shared/domain/reservation';
import { ReservationService } from '../shared/service/reservation.service';

@Component({
  selector: 'app-reserver-un-vehicules-de-societe',
  templateUrl: './reserver-un-vehicules-de-societe.component.html',
  styleUrls: ['./reserver-un-vehicules-de-societe.component.css']
})
export class ReserverUnVehiculesDeSocieteComponent implements OnInit {

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
  
  
  constructor(private modalService: NgbModal,public vehiculeService:VehiculeService , public reservationService:ReservationService) { 
    
  }

  ngOnInit() {
    this.vehiculeService.getListVehicule().subscribe(v=>{ console.log('titi') ; console.log(v[0]) ;this.vehicules= v; console.log(this.vehicules[0]) } )
    console.log("toto")
    console.log(this.vehicules[0])
  }

  open(content , immatriculation , marque , modele) {
    this.modalService.open(content).result.then((result) => {
      ;
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      ;
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
console.log(immatriculation)
console.log(immatriculation.value)

    this.stringImmatriculation = immatriculation;
    this.stringMarque = marque;
    this.stringModele = modele;
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
  add(dateReservation,dateRetour,immatriculation,marque,modele){

    const reservation = new Reservation( marque ,immatriculation,modele ,dateReservation, dateRetour);

    this.reservationService.sauvegarde(reservation)

  }

  

}
