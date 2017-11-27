import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Vehicule} from '../domain/vehicule'
import {Observable, Observer} from 'rxjs'
import { Subject } from 'rxjs/';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class VehiculeService {

  vehicules : Subject<Vehicule[]> = new BehaviorSubject([])
  vehicule : Vehicule[]

  constructor(private http:HttpClient) { }

  sauvegarder(newVehicule:Vehicule):Observable<Vehicule> {
    
     return  this.http.post<Vehicule>(environment.apiUrl + '/admin/vehicules', newVehicule,httpOptions);
      
     }

}
