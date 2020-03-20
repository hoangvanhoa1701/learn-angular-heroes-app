import { Component, OnInit } from '@angular/core';

// get route
import { ActivatedRoute } from '@angular/router';

// location back()
import { Location } from '@angular/common';

import { FormGroup, FormControl } from '@angular/forms';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.scss' ]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  heroForm = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    // console.log(this.route.snapshot.paramMap.get('id'));
    // console.log(this.route.snapshot.params.id);
    // console.log(this.route.snapshot.url.join('/'));


    // +this.route... => ép kiểu string thành number
    const id = +this.route.snapshot.paramMap.get('id');

    // get data hero and set this.hero
    this.hero = this.heroService.getHero(id);

    // set data for heroForm
    this.heroForm.patchValue({name: this.hero.name});
  }

  goBack(): void {
    this.location.back();
  }
  updateHero(): void{
    this.hero.name = this.heroForm.value.name;
  }
}
