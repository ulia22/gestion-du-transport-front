import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsontoDate'
})
export class JsontoDatePipe implements PipeTransform {

  transform(value: any, arg?: string): Date {
   
    return new Date(value.year, value.monthValue - 1, value.dayOfMonth, value.hour, value.minute, value.second, value.nano)
  }

}
