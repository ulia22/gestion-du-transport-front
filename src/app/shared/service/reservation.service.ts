import { Injectable } from '@angular/core';
import { Reservation } from '../domain/reservation';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 

@Injectable()
export class ReservationService {

  reservations:BehaviorSubject<Reservation[]> =new BehaviorSubject([]);

  constructor(private http:HttpClient) { }

  sauvegarde(newReservation:Reservation){
    console.log("bibi")
    this.http.post<Reservation>(environment.apiUrl + '/reservations',newReservation,httpOptions).subscribe(v=>{
      console.log("bijours")
      const tabReservation= this.reservations.getValue()
      tabReservation.push(v)
      this.reservations.next(tabReservation)
   })
  }

}
