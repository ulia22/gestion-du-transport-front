import { Pipe, PipeTransform } from '@angular/core';
import { Vehicule } from '../domain/vehicule';

@Pipe({
  name: 'marque'
})
export class MarquePipe implements PipeTransform {

  transform(value:Array<Vehicule>, args?: any): any {
    return value.filter(c => c.marque.toUpperCase().startsWith(args))
  }

}
