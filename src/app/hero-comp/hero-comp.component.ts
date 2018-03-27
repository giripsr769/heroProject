import { Component, OnInit} from '@angular/core';
import { Hero } from './hero'
@Component({
  selector: 'app-hero-comp',
  templateUrl: './hero-comp.component.html',
  styleUrls: ['./hero-comp.component.css']
})
export class HeroCompComponent implements OnInit {
  public herolist: string;
  public selectedHero: Hero;
  public heros: Array<any>= [
    new Hero(1, 'SuperMan'),
    new Hero(2, 'SpiderMan'),
    new Hero(3, 'HeMan'),
    new Hero(4, 'BatMan'),
    new Hero(5, 'Hulk'),
    new Hero(6, 'CaptianAmerica')
  ];

  constructor() {
    this.herolist = 'List Of Heros';
  }

  ngOnInit () {
    this.selectedHero = this.heros[0]
  }
  onselect(hero:Hero){
    this.selectedHero = hero;
  
  }
 
}
