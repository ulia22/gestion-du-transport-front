import { Injectable, Optional } from '@angular/core';
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
  categories:Subject<string[]> = new BehaviorSubject([])
  vehicule : Vehicule[]

  constructor(private http:HttpClient) { }

  getListCtegorie(){
    this.http.get<string[]>(`${environment.apiUrl}/vehicules`).toPromise().then(l => {this.categories.next(l)}   
  )
    return this.categories   
  }

  listerCategorie(){

  }

  sauvegarder(newVehicule:Vehicule):Observable<Vehicule> {
    
     return  this.http.post<Vehicule>(environment.apiUrl + '/vehicules', newVehicule,httpOptions);
      
  }

}
