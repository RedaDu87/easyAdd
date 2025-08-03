import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Options } from 'ngx-slider-v2';
import { Vehicule } from '../single/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  availableMakes = ['Toyota', 'Audi', 'Nissan', 'BMW', 'Mercedes'];
  locations = ['Chicago', 'Dallas', 'Los Angeles', 'New York'];


  breadCrumbItems = [
    { label: 'Home', link: '' },
    { label: 'Used cars', active: true }
  ];

  listData: Vehicule[] = [];
  listDatas: Vehicule[] = [];
  dataCount = 0;

  filters: any = {
    make: '',
    model: '',
    location: '',
    fuelType: [],
    minYear: null,
    maxYear: null,
    minPrice: 5000,
    maxPrice: 50000
  };

  fuelTypes = ['Gasoline', 'Diesel', 'Hybrid', 'Electric', 'Hydrogen', 'Petrol'];
  years = [2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

  options: Options = {
    floor: 0,
    ceil: 50000,
    translate: (value: number): string => `$${value}`
  };

  sortBy: 'asc' | 'desc' = 'asc';
  sortField: string = 'price';

  constructor(
    private vehiculeService: VehiculeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filters.make = params['make'] || '';
      this.filters.model = params['model'] || '';
      this.filters.location = params['location'] || '';
      this.filters.type = params['type'] || '';
      this.applyFilters();
    });

    this.vehiculeService.loadAll();
    this.vehiculeService.vehicules$.subscribe(data => {
      this.listData = data;
      this.listDatas = [...data];
      this.dataCount = data.length;
    });
  }

  applyFilters(): void {
    this.listDatas = this.listData.filter(vehicle => {
      return (
        (!this.filters.make || vehicle.title.includes(this.filters.make)) &&
        (!this.filters.model || vehicle.title.includes(this.filters.model)) &&
        (!this.filters.location || vehicle.location === this.filters.location) &&
        (!this.filters.minYear || vehicle.year >= this.filters.minYear) &&
        (!this.filters.maxYear || vehicle.year <= this.filters.maxYear) &&
        (!this.filters.fuelType.length || this.filters.fuelType.includes(vehicle.fuelType)) &&
        (!this.filters.minPrice || vehicle.price >= this.filters.minPrice) &&
        (!this.filters.maxPrice || vehicle.price <= this.filters.maxPrice)
      );
    });
    this.dataCount = this.listDatas.length;
  }

  onCheckboxChange(event: any, field: string): void {
    const value = event.target.value;
    if (event.target.checked) {
      this.filters[field].push(value);
    } else {
      this.filters[field] = this.filters[field].filter((v: string) => v !== value);
    }
  }

  resetFilters(): void {
    this.filters = {
      make: '',
      model: '',
      location: '',
      fuelType: [],
      minYear: null,
      maxYear: null,
      minPrice: 5000,
      maxPrice: 50000
    };
    this.applyFilters();
  }

  FilterSidebar(): void {
    document.getElementById('filters-sidebar')?.classList.toggle('show');
    document.querySelector('.vertical-overlay')?.classList.toggle('show');
  }

  SidebarHide(): void {
    document.getElementById('filters-sidebar')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }

  config = {
    initialSlide: 0,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };
}
