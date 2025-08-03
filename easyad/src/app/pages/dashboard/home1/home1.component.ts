import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Range Slider
// import { Options } from '@angular-slider/ngx-slider';

// // Swiper Slider


import { popular, latestCar, news } from './home1.model';
import { popularData, latestCarData, newsData } from './data';
import {Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})

/**
 * Index Component
 */
export class Home1Component implements OnInit {
  isLoading = false;

  popularData!: popular[];
  latestCarData!: latestCar[];
  newsData!: news[];

  selectedMake: string = '';
  selectedModel: string = '';
  selectedType: string = '';
  selectedLocation: string = '';

  makes: string[] = ['Acura', 'BMW', 'Citroen', 'Lexus', 'Mercedes-Benz', 'Nissan', 'Toyota'];
  models: string[] = ['Altima', 'Juke', 'Leaf', 'Maxima', 'Micra', 'Murano', 'Note', 'Patrol'];
  types: string[] = ['Compact', 'Crossover', 'Coupe', 'Family MPV', 'Pickup', 'Sedan', 'SUV', 'Wagon'];
  locations: string[] = ['Dallas', 'Chicago', 'Houston', 'Las Vegas', 'Los Angeles', 'New York', 'San Francisco'];

  onSelectMake(make: string) { this.selectedMake = make; }
  onSelectModel(model: string) { this.selectedModel = model; }
  onSelectType(type: string) { this.selectedType = type; }
  onSelectLocation(location: string) { this.selectedLocation = location; }



  constructor(private modalService: NgbModal, private router: Router) {}

  ngOnInit(): void {
    // Chat Data Get Function
    this._fetchData();

    //  Make Select data
    document.getElementById("make-content")?.addEventListener("click", function (e) {
      const input = e.target as HTMLElement;
      const mack = document.querySelector('.make') as HTMLElement;
      mack.innerText = input.innerText;
    });

    //  Model Select data
    document.getElementById("model-content")?.addEventListener("click", function (e) {
      const input = e.target as HTMLElement;
      const model = document.querySelector('.model') as HTMLElement;
      model.innerText = input.innerText;
    });

    // Type Select data
    document.getElementById("type-content")?.addEventListener("click", function (e) {
      const input = e.target as HTMLElement;
      const type = document.querySelector('.type') as HTMLElement;
      type.innerText = input.innerText;
    });

    // Location Select data
    document.getElementById("location-content")?.addEventListener("click", function (e) {
      const input = e.target as HTMLElement;
      const location = document.querySelector('.location') as HTMLElement;
      location.innerText = input.innerText;
    });

    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }

  }


  onSearch(): void {
    this.isLoading = true;

    const queryParams = {
      make: this.selectedMake,
      model: this.selectedModel,
      type: this.selectedType,
      location: this.selectedLocation
    };

    this.router.navigate(['/list'], { queryParams }).finally(() => {
      this.isLoading = false; // optionnel si NavigationEnd est utilisé ailleurs
    });
  }



  // Chat Data Fetch
  private _fetchData() {
    this.popularData = popularData;
    this.latestCarData = latestCarData;
    this.newsData = newsData;
  }

  /**
   * Swiper setting
   */
  Siderconfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true
  };

  slideConfig = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
  /**
   * Latest Car Swiper setting
   */
  LatestCar = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };



  /**
   * Swiper setting
   */
  // public CTA: SwiperOptions = {
  //   initialSlide: 0,
  //   slidesPerView: 1,
  //   navigation: true,
  //   loop: true
  // };

  /**
   * News Swiper setting
   */
  news = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: true,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    }
  };

}
