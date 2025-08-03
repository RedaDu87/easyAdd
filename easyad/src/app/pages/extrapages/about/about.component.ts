import { Component, OnInit } from '@angular/core';

import { growing, story, partners, news } from './about.model';
import { growingData, storyData, partnersData, newsData } from './data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

/**
 * About Component
 */
export class AboutComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  growingData!: growing[];
  storyData!: story[];
  partnersData!: partners[];
  newsData!: news[];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'About', active: true }
    ];

    // Data Get Function
    this._fetchData();
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  // Data Fetch
  private _fetchData() {
    this.growingData = growingData;
    this.storyData = storyData;
    this.partnersData = partnersData;
    this.newsData = newsData;
  }

  /**
   * Swiper setting
   */
   partners = {
    initialSlide: 0,
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true, // For loop
    breakpoints:{
      768:{
        slidesPerView: 4,
      },
      1200:{
        slidesPerView: 6,
      }
    }
  };

}
