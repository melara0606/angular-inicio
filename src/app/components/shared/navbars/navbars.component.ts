import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html'
})
export class NavbarsComponent {

  constructor(private router: Router) {  }

  buscarHeroe(termino: string) {
    this.router.navigate( ['/buscar', termino.toLowerCase()] );
  }

  verHeroes(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
