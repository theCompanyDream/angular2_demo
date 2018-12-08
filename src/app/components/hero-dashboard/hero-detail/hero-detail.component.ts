import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from '../../../service/hero-service/hero.service';
import { Hero } from '../../../service/hero-service/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ){}

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
        .subscribe(hero => this.hero = hero);
    }

    getHero(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
      this.location.back();
    }

    save(): void{
      this.heroService.updateHero(this.hero)
          .subscribe(() => this.goBack());
    }
}
