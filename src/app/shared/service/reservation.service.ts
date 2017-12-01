import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Subject } from 'rxjs/Subject';
import { Reservation } from '../domain/reservation';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'

const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

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

  getListeReservations(id):Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl+"/reservations/annoncesCovoiturages?covoitureurId="+id, httpOptions)
  }
}
