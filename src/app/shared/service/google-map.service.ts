import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import 'rxjs/add/observable/of';

const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable()
export class GoogleMapService {

  constructor(public http:HttpClient) {}

  observableSource = (keyword: any): Observable<any[]> => {
    if (keyword) {
      return this.http.post<any[]>(`${environment.apiUrl}/googleApi/lister`, keyword, httpOptions)
    } else {
      return Observable.of([]);
    }
  }

  dureeEtDistance(depart:string, arrive:string):Observable<any>{
    
     return this.http.post<Map<String, String>>(`${environment.apiUrl}/googleApi/dureeEtDistance`, {"villeDepart":depart, "villeArrive":arrive}, httpOptions)
   }
}
