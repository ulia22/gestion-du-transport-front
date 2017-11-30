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
export class ConnexionService {

  public observableObjectJSONAccount:Observable<any>;

  constructor(private http:HttpClient) {}

  seConnecter(email:string, password:string):Observable<any>{
    return this.http.post<any>(environment.apiUrl+"/connexion", {"email":email, "password":password}, httpOptions)
  }

  getCurrentUser(email:string, password:string):Observable<any>{
    //To Do cherche dans le local storage
    //Retourne le resultat dans un observable

    //Si local storage vide
    //Se connecte et ajoute la value au local storage et retourne un Observable
    this.observableObjectJSONAccount = this.seConnecter(email, password)

    return this.observableObjectJSONAccount
  }
}
