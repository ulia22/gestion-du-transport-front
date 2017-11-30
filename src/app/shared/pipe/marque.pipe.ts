import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marque'
})
export class MarquePipe implements PipeTransform {


  transform(value: any, args?: any): any {

    return value.filter(c => c.marque.startsWith(args))

  }

}
