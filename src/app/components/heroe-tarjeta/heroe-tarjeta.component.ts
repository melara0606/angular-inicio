import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Heroes } from '../heroes/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent {
  @Input() heroe: Heroes;
  @Input() index: number;

  @Output() hereoSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.hereoSeleccionado = new EventEmitter();
  }

  verHeroes() {
    this.router.navigate(['/heroe', this.index]);
    // this.hereoSeleccionado.emit( this.index );
  }
}
