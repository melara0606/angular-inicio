import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  transform(txt: string, codificar: boolean): string {
    if (codificar) {
      return '*'.repeat( txt.length );
    }
    return txt;
  }
}
