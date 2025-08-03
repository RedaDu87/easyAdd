import { Component, OnInit } from '@angular/core';
// Range Slider
import { Options } from 'ngx-slider-v2';

import { grid } from './grid.model';
import { gridData } from './data';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

/**
 * Grid Component
 */
export class GridComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  gridData!: grid[];
  dataCount: any;
  checkedVal: any[] = [];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'Used cars', active: true }
    ];

    // Data Get Function
    this._fetchData();

    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  // Data Fetch
  private _fetchData() {
    this.gridData = gridData;
    this.gridDatas = Object.assign([], this.gridData);
    this.dataCount = this.gridData.length;
  }

  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true
  };

  /**
   * Filter button clicked
   */
  FilterSidebar() {
    document.getElementById('filters-sidebar')?.classList.toggle('show');
    document.querySelector('.vertical-overlay')?.classList.toggle('show');
  }

  /**
  * SidebarHide modal
  * @param content modal content
  */
  SidebarHide() {
    document.getElementById('filters-sidebar')?.classList.remove('show');
    document.querySelector('.vertical-overlay')?.classList.remove('show');
  }

  gridDatas: any;
  // Location Filter
  LocationSearch() {
    var location = (document.getElementById("location") as HTMLInputElement).value;
    if (location) {
      this.gridDatas = this.gridData.filter((data: any) => {
        return data.country === location;
      });
    }
    else {
      this.gridDatas = this.gridData
    }
    this.dataCount = this.gridDatas.length;
  }

  // Type Filter
  changeType(e: any, type: any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.type));
    }
    else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.type));
    }
    if (this.checkedVal.length == 0) {
      this.gridDatas = this.gridData
    }
    this.dataCount = this.gridDatas.length;
  }


  // Year Wise Filter
  fromYear() {
    var formYear = (document.getElementById("from_year") as HTMLInputElement).value;
    var toYear = (document.getElementById("to_year") as HTMLInputElement).value;
    this.gridDatas = this.gridData.filter((data: any) => {
      return data.year >= formYear && data.year <= toYear;
    });
    this.dataCount = this.gridDatas.length;
  }

  // Make Filter
  makeFilter() {
    var make = (document.getElementById("make") as HTMLInputElement).value;
    if (make) {
      this.gridDatas = this.gridData.filter((data: any) => {
        return data.make === make;
      });
    }
    else {
      this.gridDatas = this.gridData;
    }
    this.dataCount = this.gridDatas.length;
  }

  // Model Filter
  modelFilter() {
    var model = (document.getElementById("model") as HTMLInputElement).value;
    if (model) {
      this.gridDatas = this.gridData.filter((data: any) => {
        return data.model === model;
      });
    }
    else {
      this.gridDatas = this.gridData;
    }
    this.dataCount = this.gridDatas.length;
  }

  /**
  * Range Slider Wise Data Filter
  */
  // Range Slider
  minValue: number = 1100;
  maxValue: number = 3000;
  options: Options = {
    floor: 0,
    ceil: 5000,
    translate: (value: number): string => {
      return '$' + value;
    }
  };
  valueChange(value: number, boundary: boolean): void {
    if (boundary) {
      this.minValue = value;
    } else {
      this.maxValue = value;
      this.gridDatas = this.gridData.filter((data: any) => {
        data.price = data.price.replace(/,/g, '')
        return data.price >= this.minValue && data.price <= this.maxValue;
      });
    }
    this.dataCount = this.gridDatas.length;
  }

  // Drivetrain Filter
  drivetrainFilter(e: any, type: any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.drivetrain));
    }
    else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.drivetrain));
    }
    if (this.checkedVal.length == 0) {
      this.gridDatas = this.gridData
    }
    this.dataCount = this.gridDatas.length;
  }

  // Fuel Type Filter
  fuelFilter(e: any, type: any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.fuel));
    }
    else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.fuel));
    }
    if (this.checkedVal.length == 0) {
      this.gridDatas = this.gridData
    }
    this.dataCount = this.gridDatas.length;
  }

  //Transmission Filter
  transmissionFilter(e: any, type: any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.eng));
    }
    else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.eng));
    }
    if (this.checkedVal.length == 0) {
      this.gridDatas = this.gridData
    }
    this.dataCount = this.gridDatas.length;
  }

  // Square metres Filter
  minMeters: any | undefined;
  maxMeters: any | undefined;
  mileageSearch() {
    this.minMeters = document.getElementById("fomValue") as HTMLAreaElement;
    this.maxMeters = document.getElementById("toValue") as HTMLAreaElement;
    this.gridDatas = this.gridData.filter((data: any) => {
      return data.avg >= this.minMeters.value && data.avg <= this.maxMeters.value;
    });
    this.dataCount = this.gridDatas.length;
  }

  //Color Filter
  colorFilter(e: any, type: any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.color));
    }
    else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.color));
    }
    if (this.checkedVal.length == 0) {
      this.gridDatas = this.gridData
    }
    this.dataCount = this.gridDatas.length;
  }

  // Sellers Filter
  sellersFilter(e: any, type: any) {
    if (e.target.checked) {
      this.checkedVal.push(type);
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.seller));
    }
    else {
      var index = this.checkedVal.indexOf(type);
      if (index > -1) {
        this.checkedVal.splice(index, 1);
      }
      this.gridDatas = this.gridData.filter((data: any) => this.checkedVal.includes(data.seller));
    }
    if (this.checkedVal.length == 0) {
      this.gridDatas = this.gridData
    }
    this.dataCount = this.gridDatas.length;
  }

  // Sort filter
  sortField: any;
  sortBy: any
  SortFilter() {
    this.sortField = (document.getElementById("sorting1") as HTMLInputElement).value;
    if (this.sortField[0] == 'A') {
      this.sortBy = 'desc';
      this.sortField = this.sortField.replace(/A/g, '')
    }
    if (this.sortField[0] == 'D') {
      this.sortBy = 'asc';
      this.sortField = this.sortField.replace(/D/g, '')
    }
  }

}
