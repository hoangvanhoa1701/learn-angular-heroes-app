import { Injectable } from '@angular/core';

// import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Hero[] {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.addMassage('HeroService: fetched heroes');
    return HEROES;
  }

  getHero(id: number): Hero {
    // TODO: send the message _after_ fetching the hero
    this.messageService.addMassage(`HeroService: fetched hero id=${id}`);
    return HEROES.find(hero => hero.id === id);
  }
}
