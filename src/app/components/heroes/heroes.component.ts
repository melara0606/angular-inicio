import { Component, OnInit} from '@angular/core';
import { HeroesService, Heroes } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroesList: Heroes[] = [];

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.heroesList = this.heroesService.getHeroes();
  }
}
