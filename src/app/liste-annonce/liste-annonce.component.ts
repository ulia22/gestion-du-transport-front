import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css']
})
export class ListeAnnonceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  creerAnnonce(){
    this.router.navigateByUrl("collaborateur/annonces/creer")
  }
}
