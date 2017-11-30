import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-des-reservations-vehicules',
  templateUrl: './liste-des-reservations-vehicules.component.html',
  styleUrls: ['./liste-des-reservations-vehicules.component.css']
})
export class ListeDesReservationsVehiculesComponent implements OnInit {

  public isCollapsed = false;
  public isCollapsed1 = false;
  
  
  constructor() { }

  ngOnInit() {
  }

}
