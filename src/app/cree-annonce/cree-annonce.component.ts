import { Component, OnInit } from '@angular/core';
import { Annonce } from '../shared/domain/annonce';
import { AnnonceCovoiturageService } from '../shared/service/annonce-covoiturage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { Router } from '@angular/router'
import * as moment from 'moment'
import { Personne } from '../shared/domain/personne';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { GoogleMapService } from '../shared/service/google-map.service';

@Component({
  selector: 'app-cree-annonce',
  templateUrl: './cree-annonce.component.html',
  styleUrls: ['./cree-annonce.component.css']
})
export class CreeAnnonceComponent implements OnInit {
  public isCollapsedItineraire: boolean = false;
  public isCollapsedVehicule: boolean = false;
  public isCollapsedDate: boolean = false;
  public myAddrDepart: any
  public myAddrDestination: any
  public heures: number[] = []
  public minutes: string[] = ["00", "10", "20", "30", "40", "50"]
  public rempliAddrDepart: boolean;
  public rempliAddrDepart2: boolean;
  public rempliAddrDestination: boolean;
  public rempliAddrDestination2: boolean;
  public rempliImmatriculation: boolean;
  public rempliMarque: boolean;
  public rempliModele: boolean;
  public rempliNbPlace: boolean;
  public rempliDate: boolean;
  public rempliDureeEtDistance: boolean;
  public allRempli: boolean;
  public duree: string = ""
  public distance: string = ""
  constructor(public annonceServ: AnnonceCovoiturageService, private modalService: NgbModal, private router: Router, public apiGoogle: GoogleMapService) { }

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
      this.annonceServ.saveAnnonce(new Annonce(addrDepart.value, addrDestination.value, duree.value, distance.value, immatriculation.value, marque.value, modele.value, parseInt(nbPlace.value), dateDeDepart, new Personne(parseInt(id))))
      this.router.navigateByUrl("collaborateur/annonces")
    }
    return false
  }

  open(content) {
    this.modalService.open(content)
  }

  testRempliItineraire($event) {
    if ($event.target.value && $event.target.id == "inputAddrDepart") {
      if (this.myAddrDepart.place_id) {
        this.rempliAddrDepart = true;
        this.rempliAddrDepart2 = true
      } else {
        this.rempliAddrDepart2 = false;
        this.rempliAddrDepart = true
      }
    } else {
      if ($event.target.id == "inputAddrDepart") {
        this.rempliAddrDepart = false;
        this.rempliAddrDepart2 = true
      }
    }
    if ($event.target.value && $event.target.id == "inputAddrDestination") {
      if (this.myAddrDestination.place_id) {
        this.rempliAddrDestination = true;
        this.rempliAddrDestination2 = true;
      } else {
        this.rempliAddrDestination = true;
        this.rempliAddrDestination2 = false;
      }
    } else {
      if ($event.target.id == "inputAddrDestination") {
        this.rempliAddrDestination = false;
        this.rempliAddrDestination2 = true;
      }
    }
    if (this.rempliAddrDepart == true && this.rempliAddrDepart2 == true && this.rempliAddrDestination == true && this.rempliAddrDestination2 == true) {
      this.apiGoogle.dureeEtDistance(this.myAddrDepart.formatted_address, this.myAddrDestination.formatted_address).subscribe(map => {
        this.duree = map["duree"]
        this.distance = map["distance"]
        this.rempliDureeEtDistance=true
        this.formulaireValide()
      }, err =>{
        this.duree = err.error.message
        this.distance = err.error.message
        this.rempliDureeEtDistance=false
        this.formulaireValide()
      })
    }
    this.formulaireValide()
  }

  testRempli($event) {
    if ($event.target.value && $event.target.id == "inputImmatriculation") {
      this.rempliImmatriculation = true;
    } else {
      if ($event.target.id == "inputImmatriculation") {
        this.rempliImmatriculation = false;
      }
    }
    if ($event.target.value && $event.target.id == "inputMarque") {
      this.rempliMarque = true;

    } else {
      if ($event.target.id == "inputMarque") {
        this.rempliMarque = false;
      }
    }
    if ($event.target.value && $event.target.id == "inputModele") {
      this.rempliModele = true;
    } else {
      if ($event.target.id == "inputModele") {
        this.rempliModele = false;
      }
    }
    if ($event.target.value && $event.target.id == "inputNbPlace") {
      if (parseInt($event.target.value) >= 1 && parseInt($event.target.value) <= 20) {
        this.rempliNbPlace = true;
      } else {
        this.rempliNbPlace = false;
      }
    } else {
      if ($event.target.id == "inputNbPlace") {
        this.rempliNbPlace = false;
      }
    }
    if ($event.target.value && $event.target.id == "inputDate") {
      if (new Date($event.target.value) >= moment(new Date()).startOf("day").toDate()) {
        this.rempliDate = true;
      } else {
        this.rempliDate = false;
      }
    }
    this.formulaireValide()
  }

  formulaireValide(){
    if (this.rempliDureeEtDistance == true && this.rempliAddrDepart == true && this.rempliAddrDestination == true && this.rempliDate == true && this.rempliImmatriculation == true && this.rempliMarque == true && this.rempliModele == true && this.rempliNbPlace == true) {
      this.allRempli = true
    } else {
      this.allRempli = false
    }
  }
}
