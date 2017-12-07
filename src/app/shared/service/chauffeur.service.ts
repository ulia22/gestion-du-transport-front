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
export class ChauffeurService {

  constructor(private http:HttpClient) { }

  getChauffeursList():Observable<any[]>{
    return this.http.get<any[]>(environment.apiUrl+"/chauffeurs", httpOptions)
  }

  ajouterChauffeur(matricule):Observable<any[]>{
    return this.http.post<any[]>(environment.apiUrl+"/chauffeurs",matricule, httpOptions)
  }
}
