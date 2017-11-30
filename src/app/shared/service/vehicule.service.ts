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

 vehicules:BehaviorSubject<Vehicule[]>=new BehaviorSubject([])
 categories:Subject<string[]> = new BehaviorSubject([])
 vehicule : Vehicule[]

 constructor(private http:HttpClient) { }

 refresh():void{
   this.http.get<Vehicule[]>(`${environment.apiUrl}/vehicules`)
   .subscribe(col => this.vehicules.next(col))
 }

 getListCtegorie(){
   this.http.get<string[]>(`${environment.apiUrl}/vehicules/categories`).toPromise().then(l => {this.categories.next(l)}  
 )
   return this.categories  
 }

 getListVehicule():Observable<Vehicule[]>{
   this.refresh()
   return this.vehicules.asObservable();
 /* this.http.get<Vehicule[]>(`${environment.apiUrl}/vehicules`).toPromise().then(l => {
    this.vehicules.next(l)}
 )
   return this.vehicules*/
 }

 sauvegarder(newVehicule:Vehicule):void {
   
    this.http.post<Vehicule>(environment.apiUrl + '/vehicules',newVehicule,httpOptions).subscribe(v=>{
       const tabVehicule= this.vehicules.getValue()
       tabVehicule.push(v)
       this.vehicules.next(tabVehicule)
    })
    this.refresh()
 }

}
