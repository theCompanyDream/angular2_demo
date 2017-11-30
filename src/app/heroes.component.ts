import { Component} from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  providers: [HeroService],
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  title = 'Hall of heroes';
  selectedHero: Hero;
  searchableName: '';
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onselect(hero:Hero): void{
    this.selectedHero = hero;
  }

  getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  searchHeroes(searchableString:string): void{
    if(searchableString)
      this.heroService.searchHeroes(searchableString).then(heroes => this.heroes = heroes);
    else
      this.getHeroes();
  }

}
