import { Component, OnInit } from '@angular/core';
import { UserRolesService } from '../shared/service/user-roles.service'
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
    this.vehiculeService.getListVehicule().subscribe(v=>{ this.vehicules= v } )
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
<<<<<<< HEAD
    
=======
>>>>>>> c00efbdf2d8ba6c30a35a086412dc8eabf9ca3e4
        this.vehiculeService.sauvegarder(voiture)
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
    else
      this.validePhoto=false
  }

  onBoolMarque($event){
    if($event.target.value!="")
      this.valideMarque=true
    else
      this.valideMarque=false
  }

  onBoolImmatriculation1($event){
    if($event.target.value!="" && $event.target.value.length >=2)
      this.valideImmatriculation1=true
    else
      this.valideImmatriculation1=false
  }

  onBoolImmatriculation2($event){
    if($event.target.value!="" && $event.target.value >= 100)
      this.valideImmatriculation2=true
    else
      this.valideImmatriculation2=false
  }

  onBoolImmatriculation3($event){
    if($event.target.value!="" && $event.target.value.length >=2)
      this.valideImmatriculation3=true
    else
      this.valideImmatriculation3=false
  }

  onBoolModele($event){
    if($event.target.value!="")
      this.valideModele=true
    else
      this.valideModele=false
  }

  onBoolNbp($event){
    if($event.target.value!="")
      this.valideNbp=true
    else
      this.valideNbp=false
  }

}
