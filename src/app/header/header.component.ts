import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  mostrar = true;
  personajes = ['Spiderman', 'Venoman', 'Dr. Octopus'];
  texto = 'Entre mas grande es el proposito  mayor es la actitud';
}
