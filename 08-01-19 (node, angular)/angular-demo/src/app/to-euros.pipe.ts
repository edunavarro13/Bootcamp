import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toEuros'
})
export class ToEurosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + '€';
  }

}
