import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'

const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable()
export class ReservationService {

  constructor(private http:HttpClient) { }

  getListeReservations(id):Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl+"/reservations/annoncesCovoiturages?covoitureurId="+id, httpOptions)
  }
}
