import { Component, OnInit} from '@angular/core';
import { HeroesService, Heroes } from './heroes.service';
import { Router } from '@angular/router';

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
