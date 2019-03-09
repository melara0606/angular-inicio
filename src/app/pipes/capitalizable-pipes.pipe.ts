import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizable'
})
export class CapitalizablePipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
    const array = value.split(' ');
    if (!todas) {
      return `${ this.mapFunction([ array.shift() ]) } ${ array.join(' ') }`;
    }

    return this.mapFunction(array);
  }

  mapFunction(array: string[]): string {
    return array.map((element) => {
      return element[0].toUpperCase() + element.substr(1).toLowerCase();
    }).join(' ');
  }
}
