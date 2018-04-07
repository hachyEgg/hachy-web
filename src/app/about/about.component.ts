import { Component } from '@angular/core';

import { Animations, AnimationsService } from '../shared/';
import { AboutItem } from './interfaces/';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent extends Animations {
  public libraries: AboutItem[] = [
    {
      name: '1. Fast: one click is good',
      logo: '/assets/angular.png',
      url: 'https://github.com/angular/angular',
    },
    {
      name: '2. Convinent: no other tools needed',
      logo: '/assets/angular.png',
      url: 'https://github.com/angular/material2',
    },
    {
      name: '4. Accurate: results based on ML on 10k egg datasets',
      logo: '/assets/firebase.png',
      url: 'https://github.com/angular/angularfire2',
    },
    {
      name: '5. Cheap: production cost <= $20',
      url: 'https://github.com/urish/angular2-moment',
    },
  ];

  

  /**
   * Constructor of the class
   *
   * @param {AnimationsService} animationsService
   */
  public constructor(
    protected animationsService: AnimationsService
  ) {
    super(animationsService);
  }
}
