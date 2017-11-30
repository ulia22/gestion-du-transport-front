import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Vehicule} from '../domain/vehicule'
import {Observable, Observer} from 'rxjs'
import { Subject } from 'rxjs/';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';
import { Modele } from '../domain/modele';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class VehiculeService {

  newVehicule : Subject<Vehicule> = new BehaviorSubject(null)
  vehicules:BehaviorSubject<Vehicule[]>=new BehaviorSubject([])
  categories:Subject<string[]> = new BehaviorSubject([])
  vehicule : Vehicule[]

  constructor(private http:HttpClient) { }

  refresh():void{
    
    this.http.get<Vehicule[]>(`${environment.apiUrl}/vehicules`)
    .subscribe(col => {this.vehicules.next(col)
    console.log("yata")})
  }

  getListCtegorie(){
    this.http.get<string[]>(`${environment.apiUrl}/vehicules/categories`).toPromise().then(l => {this.categories.next(l)}   
  )
    return this.categories   
  }

  getListVehicule():Observable<Vehicule[]>{
    this.refresh()
    return this.vehicules.asObservable();
  }

  sauvegarder(newVehicule:Vehicule): Subject<Vehicule[]> {
    
      const vehiculeCreatedObservable : Observable<Vehicule> = this.http.post<Vehicule>(environment.apiUrl + '/vehicules',newVehicule,httpOptions)

      vehiculeCreatedObservable.subscribe(v=> {
        const tabVehicule:Vehicule[] = this.vehicules.getValue()
        tabVehicule.push(v)
        this.vehicules.next(tabVehicule)
      })
     return this.vehicules;
  }

}
