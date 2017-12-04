import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class GoogleMapService {

  constructor(public http:HttpClient) {}

  observableSource = (keyword: any): Observable<any[]> => {
    let key:string = 'AIzaSyARXfeKJRH_yzGsWYykXiCRVv0x4bRCGxw'
    let url:string = 'https://maps.googleapis.com/maps/api/geocode/json?region=fr&address='+keyword+'&key='+key
    if (keyword) {
      return this.http.get<any[]>(url).map(donnees=>donnees['results'])
    } else {
      return Observable.of([]);
    }
  }
  
  dureeEtDistance(depart:string, arrive:string){
   
    let key = "AIzaSyCzPpFfGV25qZ7UULVVdz25aI-Rf06S6aQ"
    let url = "https://maps.googleapis.com/maps/api/directions/json?origin="+depart+"&destination="+arrive+"&key="+key
    return this.http.get<any>(url).map(resp => {
      const distance = resp.routes[0][1].legs[0].distance.text
      const duree = resp.routes[0][1].legs[0].duration.text
      return [duree, distance]
    })
  }
}
