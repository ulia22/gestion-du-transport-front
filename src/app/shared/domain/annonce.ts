import { Personne } from "./personne";

export class Annonce {

    constructor(public addrDepart:string, public addrArrivee:string, public duree:string,public distance:string, public immatriculation:string, public marque:string, public modele:string, public nbPlace:number, public dateDepart:Date, public personne:Personne, public dateDeCreation:Date=new Date(), public isArchive:boolean=false){}
}
