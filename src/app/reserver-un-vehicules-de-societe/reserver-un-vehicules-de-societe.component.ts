import { Component, OnInit } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-reserver-un-vehicules-de-societe',
  templateUrl: './reserver-un-vehicules-de-societe.component.html',
  styleUrls: ['./reserver-un-vehicules-de-societe.component.css']
})
export class ReserverUnVehiculesDeSocieteComponent implements OnInit {

  time: NgbTimeStruct = {hour: 0, minute: 0, second: 0};
  hourStep = 1;
  minuteStep = 10;

  public isCollapsed = true;
  public isCollapsed1 = false;
  constructor() { }

  ngOnInit() {
  }

}
