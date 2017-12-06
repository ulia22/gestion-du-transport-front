import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Annonce } from '../domain/annonce';
import { ReplaySubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable()
export class AnnonceCovoiturageService {

  public mesAnnoncesSubject: BehaviorSubject<Annonce[]> = new BehaviorSubject([])

  //public toutesLesAnnonces:BehaviorSubject<Annonce[]> = new BehaviorSubject([])

  constructor(private http:HttpClient) { }

  listeMesAnnonces(id):Observable<Annonce[]>{
    this.http.get<Annonce[]>(`${environment.apiUrl}/annoncesCovoiturages/mesAnnonces?personneId=`+id, httpOptions).subscribe(annonceTab => this.mesAnnoncesSubject.next(annonceTab))
    return this.mesAnnoncesSubject.asObservable()
  }

 saveAnnonce(newAnnonce:Annonce):void{
  this.http.post<Annonce>(`${environment.apiUrl}/annoncesCovoiturages/creer`,newAnnonce, httpOptions).subscribe(annonce => {
  const annonceTab =this.mesAnnoncesSubject.getValue()
  annonceTab.push(annonce)
  this.mesAnnoncesSubject.next(annonceTab)
  })
 }

 annulerAnnonce(idAnnonce, idCreateur):Observable<any[]>{
   return this.http.delete<any[]>(`${environment.apiUrl}/annoncesCovoiturages?personneId=`+idCreateur+'&annonceId='+idAnnonce, httpOptions)
 }

 getListAnnoncesCovoiturage(personneId):Observable<any[]>{
   return this.http.get<any[]>(`${environment.apiUrl}/annoncesCovoiturages?personneId=`+personneId, httpOptions)
 }

}
