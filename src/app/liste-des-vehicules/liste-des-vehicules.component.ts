import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Vehicule } from '../shared/domain/vehicule' 
import { VehiculeService } from '../shared/service/vehicule.service';

@Component({
  selector: 'app-liste-des-vehicules',
  templateUrl: './liste-des-vehicules.component.html',
  styleUrls: ['./liste-des-vehicules.component.css']
})
export class ListeDesVehiculesComponent implements OnInit {

  
  closeResult: string;
  vehicule: Vehicule[]
  categories : string[]

  constructor(private modalService: NgbModal,public vehiculeService:VehiculeService ) { }

  ngOnInit() {
    this.vehiculeService.getListCtegorie().subscribe(l=>{ this.categories=l
      console.log(this.categories[3])} )
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

  add(immatricule:HTMLInputElement, marque: HTMLInputElement,modele:HTMLInputElement 
    , categorie:HTMLInputElement , nbp:HTMLInputElement,photo:HTMLInputElement){
    
        console.log("mode ajout")
       
        const voiture = new  Vehicule( immatricule.value ,marque.value ,modele.value ,categorie.value ,nbp.value ,photo.value);
       
        this.vehiculeService.sauvegarder(voiture).subscribe(voiture =>{
        
          this.vehicule.push(voiture)

        
             
        })
        
       

        return false
    
      }

}
