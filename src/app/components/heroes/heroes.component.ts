import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService, Heroes } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroesList: Heroes[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroesList = this.heroesService.getHeroes();
  }

  verHeroes(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
}
