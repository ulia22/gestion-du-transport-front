import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Vehicule } from '../shared/domain/vehicule' 
import { VehiculeService } from '../shared/service/vehicule.service';
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
  stringImmatriculation:string=""
  stringMarque:string=""

  
  valideImmatriculation1=false
  valideImmatriculation2=false
  valideImmatriculation3=false

  valideMarque=false
  validePhoto=false
  valideModele=false
  valideNbp=false


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
      this.closeResult = `Dismissed ${this.getDismissReason(reason)
      }`;
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

  add(immatriculation1:HTMLInputElement,immatriculation2:HTMLInputElement,immatriculation3:HTMLInputElement, marque: HTMLInputElement , modele:HTMLInputElement
    , categorie:HTMLInputElement , nbp:HTMLInputElement,photo:HTMLInputElement ){

      let immatriculation = immatriculation1.value +"-" + immatriculation2.value +"-"+ immatriculation3.value
      console.log(immatriculation)
        const voiture = new  Vehicule( immatriculation ,marque.value ,nbp.value ,photo.value,categorie.value,modele.value);
    //  const marques =  new  Marque(marque.value );
      //  const model = new Modele(categorie.value,modele.value,marque.value)
        this.vehiculeService.sauvegarder(voiture).subscribe(vehicule =>{
          this.vehicules.push(vehicule)
  

        
             
        })
        
       

        return false
    
  }

  onKeyUpImmatriculation($event){
    this.stringImmatriculation=$event.target.value
  }

  onKeyUpMarque($event){
    this.stringMarque=$event.target.value
  }


  onBoolPhoto($event){
    if($event.target.value!="")
      this.validePhoto=true
  }

  onBoolMarque($event){
    if($event.target.value!="")
      this.valideMarque=true
  }

  onBoolImmatriculation1($event){
    if($event.target.value!="" && $event.target.value.length >=2)
      this.valideImmatriculation1=true
  }

  onBoolImmatriculation2($event){
    if($event.target.value!="" && $event.target.value >= 100)
      this.valideImmatriculation2=true
  }

  onBoolImmatriculation3($event){
    if($event.target.value!="" && $event.target.value.length >=2)
      this.valideImmatriculation3=true
  }

  onBoolModele($event){
    if($event.target.value!="")
      this.valideModele=true
  }

  onBoolNbp($event){
    if($event.target.value!="")
      this.valideNbp=true
  }

}
