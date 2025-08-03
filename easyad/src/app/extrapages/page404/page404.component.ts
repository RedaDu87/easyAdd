import { Component, OnInit } from '@angular/core';

import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.scss'],
  standalone:true,
  imports:[LottieComponent]
})

/**
 * Page404 Component
 */
export class Page404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: 'assets/json/animation-car-finder-404.json',
  };

  animationCreated(animationItem: AnimationItem): void { }

}
