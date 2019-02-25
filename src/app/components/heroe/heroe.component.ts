import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroes, HeroesService } from '../heroes/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  public heroe: Heroes;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService
              ) {
    this.activatedRoute.params.subscribe(param => {
      this.heroe = heroesService.getHeroe( param.id );
    });
  }
  ngOnInit() {}
}
