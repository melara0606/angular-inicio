import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  nombre = 'Edwin Melara';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234328;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    alias: 'Wolverine',
    edad: 500,
    direccion : {
      casa: 'Primera',
      calle: 90
    }
  };

  date = new Date();

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => resolve('Llego la respuesta'), 3500);
  });
}
