export class Reservation {
    
        constructor(
            public reservation:Date ,
            public retour:Date ,
            public immatriculation:string,
            public marque:string ,
            public modele:string ,
            public avecChauffeur:boolean){}
    
}