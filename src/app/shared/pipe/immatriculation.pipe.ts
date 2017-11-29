import { Pipe, PipeTransform } from '@angular/core';
import { Vehicule } from '../domain/vehicule';

@Pipe({
  name: 'immatriculation'
})
export class ImmatriculationPipe implements PipeTransform {

  transform(value:Array<Vehicule>, args?: any): any {
    return value.filter(c => c.immatriculation.toUpperCase().startsWith(args))
  }

}
