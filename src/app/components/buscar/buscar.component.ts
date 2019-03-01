import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes, HeroesService } from '../heroes/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {
  heroes: Heroes[];
  termino: string;

  constructor(private heroesService: HeroesService,
              private router: Router,
              private activatedRouter: ActivatedRoute
            ) { }

  ngOnInit() {
    this.activatedRouter.params.subscribe( params => {
      this.termino = params.termino;
      this.heroes = this.heroesService.buscarHeroe(params.termino);
    });
  }
}
