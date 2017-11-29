import { Component, OnInit } from '@angular/core';
import { Annonce } from '../shared/domain/annonce';
import { AnnonceCovoiturageService } from '../shared/service/annonce-covoiturage.service';

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
  public rempli: boolean


  constructor(public annonceServ: AnnonceCovoiturageService) { }

  ngOnInit() {
    for (let i=0; i < 24; i++){
      this.heures.push(i)
    }
  }

  add(addrDepart: HTMLInputElement, addrDestination: HTMLInputElement, duree: HTMLInputElement, distance: HTMLInputElement, immatriculation: HTMLInputElement, marque: HTMLInputElement, modele: HTMLInputElement, nbPlace: HTMLInputElement, date: HTMLInputElement, heure: HTMLInputElement, minute: HTMLInputElement) {
    let dateDeDepart:Date = new Date(date.value)
    dateDeDepart.setHours(parseInt(heure.value))
    dateDeDepart.setMinutes(parseInt(minute.value))
    if (addrDepart.value && addrDestination.value && duree.value && distance.value && immatriculation.value && marque.value && modele.value && nbPlace.value && date.value && heure.value && minute.value) {
      this.annonceServ.saveAnnonce(new Annonce(addrDepart.value, addrDestination.value, parseInt(duree.value), immatriculation.value, marque.value, modele.value, parseInt(nbPlace.value), dateDeDepart ))
    }
    return false
  }
}
