import { Component, OnInit } from '@angular/core';
import {NgbTimeStruct ,NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { bootstrap } from 'bootstrap';
import {VehiculeService} from "../shared/service/vehicule.service"
import {Vehicule} from "../shared/domain/vehicule"

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

  closeResult: string;

  public vehicules:Vehicule[]
  
  
  constructor(private modalService: NgbModal,public vehiculeService:VehiculeService) { 
    
  }

  ngOnInit() {
    this.vehiculeService.getListVehicule().subscribe(l=>{this.vehicules=l})
    console.log("toto");
    console.log(this.vehicules[0]);
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
    } else {
      return  `with: ${reason}`;
    }
  }

  

}
