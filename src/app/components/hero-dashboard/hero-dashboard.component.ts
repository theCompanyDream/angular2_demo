import { Component, OnInit } from '@angular/core';

import { Hero } from '../../service/hero-service/hero';
import { HeroService } from '../../service/hero-service/hero.service';

@Component({
  selector: 'ngx-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls:  ['./hero-dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService){ }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
