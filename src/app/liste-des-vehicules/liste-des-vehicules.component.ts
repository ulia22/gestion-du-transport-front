import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Vehicule } from '../shared/domain/vehicule' 
import { VehiculeService } from '../shared/service/vehicule.service';
import { Marque } from '../shared/domain/marque';
import { Modele } from '../shared/domain/modele';

@Component({
  selector: 'app-liste-des-vehicules',
  templateUrl: './liste-des-vehicules.component.html',
  styleUrls: ['./liste-des-vehicules.component.css']
})
export class ListeDesVehiculesComponent implements OnInit {

  
  closeResult: string;
  vehicules: Vehicule[]
  categories : string[]
  immatriculation:string=""
  marque:string=""

  constructor(private modalService: NgbModal,public vehiculeService:VehiculeService ) { 

    
  }

  ngOnInit() {
    this.vehiculeService.getListCtegorie().subscribe(l=>{ this.categories=l } )
    this.vehiculeService.getListVehicule().subscribe(v=>{ this.vehicules= v 
      console.log("toto")
    console.log(this.vehicules)} )
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

  add(immatriculation:HTMLInputElement, marque: HTMLInputElement , modele:HTMLInputElement
    , categorie:HTMLInputElement , nbp:HTMLInputElement,photo:HTMLInputElement){

       
        const voiture = new  Vehicule( immatriculation.value ,marque.value ,nbp.value ,photo.value,categorie.value,modele.value);
    //  const marques =  new  Marque(marque.value );
      //  const model = new Modele(categorie.value,modele.value,marque.value)
        this.vehiculeService.sauvegarder(voiture).then(vehicule =>{
        
          this.vehicules.push(vehicule)

        
             
        })
        
       

        return false
    
  }

  onKeyUpImmatriculation($event){
    this.immatriculation=$event.target.value
  }

  onKeyUpMarque($event){
    this.marque=$event.target.value
  }

  onKeyUpButton($button){
    console.log("enter")
    $button.prop('enable',true)
  }

}
