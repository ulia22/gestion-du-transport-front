import { Component, OnInit } from '@angular/core';
import { Annonce } from '../shared/domain/annonce';
import { AnnonceCovoiturageService } from '../shared/service/annonce-covoiturage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { Router } from '@angular/router'
import * as moment  from 'moment'
import { Personne } from '../shared/domain/personne';

@Component({
  selector: 'app-cree-annonce',
  templateUrl: './cree-annonce.component.html',
  styleUrls: ['./cree-annonce.component.css']
})
export class CreeAnnonceComponent implements OnInit {
  public isCollapsedItineraire: boolean = false;
  public isCollapsedVehicule: boolean = false;
  public isCollapsedDate: boolean = false;
  public heures: number[] = []
  public minutes: string[] = ["00", "10", "20", "30", "40", "50"]
  public rempliAddrDepart:boolean;
  public rempliAddrDestination:boolean;
  public rempliImmatriculation:boolean;
  public rempliMarque:boolean;
  public rempliModele:boolean;
  public rempliNbPlace:boolean;
  public rempliDate:boolean;
  public allRempli:boolean
  constructor(public annonceServ: AnnonceCovoiturageService, private modalService: NgbModal, private router:Router) { }

  ngOnInit() {
    for (let i = 0; i < 24; i++) {
      this.heures.push(i)
    }
  }

  add(addrDepart: HTMLInputElement, addrDestination: HTMLInputElement, duree: HTMLInputElement, distance: HTMLInputElement, immatriculation: HTMLInputElement, marque: HTMLInputElement, modele: HTMLInputElement, nbPlace: HTMLInputElement, date: HTMLInputElement, heure: HTMLInputElement, minute: HTMLInputElement) {
    let dateDeDepart: Date = new Date(date.value)
    dateDeDepart.setHours(parseInt(heure.value))
    dateDeDepart.setMinutes(parseInt(minute.value))
    if (addrDepart.value && addrDestination.value && duree.value && distance.value && immatriculation.value && marque.value && modele.value && nbPlace.value && date.value && heure.value && minute.value) {
      let id = JSON.parse(localStorage.getItem('personneEtAccount')).idPersonne
      this.annonceServ.saveAnnonce(new Annonce(addrDepart.value, addrDestination.value, parseInt(duree.value), parseInt(distance.value), immatriculation.value, marque.value, modele.value, parseInt(nbPlace.value), dateDeDepart, new Personne(parseInt(id))))
      this.router.navigateByUrl("collaborateur/annonces")
    }
    return false
  }

  open(content) {
    this.modalService.open(content)
  }

  testRempli($event){
    if($event.target.value && $event.target.id == "inputAddrDepart"){
      this.rempliAddrDepart=true;
    }
    if($event.target.value && $event.target.id == "inputAddrDestination"){
      this.rempliAddrDestination=true;
    }
    if($event.target.value && $event.target.id == "inputImmatriculation"){
      this.rempliImmatriculation=true;
    }
    if($event.target.value && $event.target.id == "inputMarque"){
      this.rempliMarque=true;
    }
    if($event.target.value && $event.target.id == "inputModele"){
      this.rempliModele=true;
    }
    if($event.target.value && $event.target.id == "inputNbPlace"){
      if(parseInt($event.target.value)>=1 && parseInt($event.target.value)<=20){
        this.rempliNbPlace=true;
      } else {
        this.rempliNbPlace=false
      }
    }
    if($event.target.value && $event.target.id == "inputDate"){
      if(new Date($event.target.value) >= moment(new Date()).startOf("day").toDate()) {
        this.rempliDate=true;
      } else{
        this.rempliDate=false
      }
      
    }
    if (this.rempliAddrDepart == true && this.rempliAddrDestination == true && this.rempliDate == true && this.rempliImmatriculation == true && this.rempliMarque == true && this.rempliModele == true && this.rempliNbPlace == true){
      this.allRempli=true
    } else {
      this.allRempli=false
    }
  }
  
}
