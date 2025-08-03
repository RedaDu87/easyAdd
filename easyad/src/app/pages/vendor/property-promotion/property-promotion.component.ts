import { Component, OnInit } from '@angular/core';

import { promotion } from './property-promotion.model';
import { promotionData } from './data';

@Component({
  selector: 'app-property-promotion',
  templateUrl: './property-promotion.component.html',
  styleUrls: ['./property-promotion.component.scss']
})

/**
 * Property Promotion Component
 */
export class PropertyPromotionComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  promotionData!: promotion[];

  constructor() { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
     this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'Sell car', link:'/vendor/sell-car' },
      { label: 'Promotion page', active: true }
    ];

     // Chat Data Get Function
     this._fetchData();
     if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  // Chat Data Fetch
  private _fetchData() {
    this.promotionData = promotionData;
  }

  result:any = 0;
  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkboxes:any = document.getElementsByName('checkAll');
    this.result = 0
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        this.result += parseInt(checkboxes[i].value);
      }
    }
  }

}
