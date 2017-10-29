import { Component } from '@angular/core';

const HEROES: Hero[] = [
  {id: 11, name: 'Deku'},
  {id: 12, name: 'Uravity'},
  {id: 13, name: 'Lord Death Explosion'},
  {id: 14, name: 'Tailman'},
  {id: 15, name: 'Froppy'},
  {id: 16, name: 'Tenya'},
  {id: 17, name: 'Shoto'},
  {id: 18, name: 'Cannot stop twinkling'},
  {id: 19, name: 'Chargebolt'},
  {id: 20, name: 'Alien Queen'},
  {id: 21, name: 'Red Riot'},
  {id: 22, name: 'Tentacole'},
  {id: 23, name: 'Sugarman'},
  {id: 24, name: 'Earphone Jack'},
  {id: 25, name: 'Tsukuyomi'},
  {id: 26, name: 'Cellophane'},
  {id: 27, name: 'Invisible Girl'},
  {id: 28, name: 'Creati'},
  {id: 29, name: 'Saitama'},
  {id: 30, name: 'Grape Juice'},
  {id: 31, name: 'Anima'}
];

export class Hero{
  id: number;
  name: string;
};

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>Hall of heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
    [class.selected]="hero === selectedHero"
    (click)="onselect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>

  <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
          <label>name: </label>
          <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
  </div>


  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
`]
})

export class AppComponent {
  title = 'Hall of heroes';

  onselect(hero:Hero): void{
    this.selectedHero = hero;
  }

  public selectedHero: Hero;
  public heroes = HEROES;
}
