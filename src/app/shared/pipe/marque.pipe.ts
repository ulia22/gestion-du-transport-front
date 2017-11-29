import { Pipe, PipeTransform } from '@angular/core';
<<<<<<< HEAD
import { Vehicule } from '../domain/vehicule';
=======
>>>>>>> Gerer_les_véhicules

@Pipe({
  name: 'marque'
})
export class MarquePipe implements PipeTransform {

<<<<<<< HEAD
  transform(value:Array<Vehicule>, args?: any): any {
    return value.filter(c => c.marque.toUpperCase().startsWith(args))
=======
  transform(value: any, args?: any): any {
    return null;
>>>>>>> Gerer_les_véhicules
  }

}
