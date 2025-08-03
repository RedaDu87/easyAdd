import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { apartments, latestCar } from './single.model';
import { apartmentsData, latestCarData } from './data';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Vehicule } from './vehicule.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})

/**
 * Single Component
 */
export class SingleComponent implements OnInit {

  @ViewChild('slickModal') slickModal!: SlickCarouselComponent;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  apartmentsData!: apartments[];
  latestCarData!: latestCar[];
  public firstColleaps = true;
  public msgColleaps = true;

  //  Validation form
  validationform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;
carouselConfig: any;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'Used cars', link: '' },
      { label: 'Mercedes-Benz E 400 Cabriolet', active: true }
    ];

    /**
     * Bootstrap validation form data
     */
    this.validationform = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    // Data Get Function
    this._fetchData();
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  // Data Fetch
  private _fetchData() {
    this.apartmentsData = apartmentsData;
    this.latestCarData = latestCarData;
  }

  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true,
    arrows: false
  };


  /**
   * Latest Car Swiper setting
   */
  LatestCar = {
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    infinite: true,
    autoplay: false, // Add this if you want autoplay
    autoplaySpeed: 2000, // Add this if you want to set autoplay speed
    variableWidth: false, // Change to true if you want variable width slides
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  /**
  * Bootsrap validation form submit method
  */
  validSubmit() {
    this.submit = true;
  }

  /**
 * Returns form
 */
  get form() {
    return this.validationform.controls;
  }

  vehicule: Vehicule = {
    title: 'Mercedes-Benz E 400 Cabriolet',
    price: 31900,
    year: 2018,
    mileage: '25K miles',
    bodyType: 'Convertible',
    drivetrain: 'Front Wheel Drive',
    engine: '2.5L Turbo 6 Cylinder',
    transmission: '7-Speed Shiftable Automatic',
    fuelType: 'Gasoline',
    cityMpg: 20,
    highwayMpg: 29,
    exteriorColor: 'Aspen White',
    interiorColor: 'Charcoal',
    vin: '2VW821AU9JM754284',
    location: 'Chicago, IL 60603',
    images: [
      'assets/img/car1.jpg',
      'assets/img/car2.jpg',
      'assets/img/car3.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/dofyR9p8e7w',
    condition: 'Used',
    certified: true,
    features: {
      exterior: ['Alloy Wheels', 'Sunroof / Moonroof', 'Tinged glass', 'LED Headlights', 'Foldable Roof', 'Tow Hitch'],
      interior: ['Adjustable Steering Wheel', 'Leather Seats', 'Heated Front Seats', 'Pass-Through Rear Seat'],
      safety: ['Airbag: Driver', 'Airbag: Passenger', 'Alarm', 'Blind Spot Monitor'],
      technology: ['Bluetooth', 'Navigation System', 'Apple CarPlay', 'Android Auto'],
    },
    description: 'Lorem tincidunt lectus vitae id vulputate diam quam. Imperdiet non scelerisque turpis sed etiam ultrices.',
    seller: {
      name: 'Devon Lane',
      avatar: 'assets/img/avatars/33.jpg',
      isPrivate: true,
      phone: '(316) *** ****',
      reviews: 5,
    },
    publishedDate: '2021-05-09',
    adNumber: '681013232',
    views: 57,
  };

  private featuresCache: { [category: string]: string[][] } = {};

  splitListCached(category: string, columns: number): string[][] {
    if (!this.featuresCache[category]) {
      const list = this.vehicule.features[category];
      const result: string[][] = [];
      const chunkSize = Math.ceil(list.length / columns);
      for (let i = 0; i < columns; i++) {
        result.push(list.slice(i * chunkSize, (i + 1) * chunkSize));
      }
      this.featuresCache[category] = result;
    }
    return this.featuresCache[category];
  }
  
  
  trackByIndex(index: number): number {
    return index;
  }
  

}
