export class Annonce {

    constructor(public addrDepart:string, public addrArrivee:string, public duree:number,public distance:number, public immatriculation:string, public marque:string, public modele:string, public nbPlace:number, public dateDepart:Date, public dateDeCreation:Date=new Date(), public isArchive:boolean=false){}
}
