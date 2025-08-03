import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { List, reviews, latestCar } from './vendor.model';
import { listData, aboutReviewData, latestCarData } from './data';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})

/**
 * Vendor Component
 */
export class VendorComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  listData!: List[];
  aboutReviewData!: reviews[];
  latestCarData!: latestCar[];
  //  Validation form
  validationform!: UntypedFormGroup;
  messageform!: UntypedFormGroup;
  submit!: boolean;
  formsubmit!: boolean;

  constructor(private modalService: NgbModal, private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Home', link: '' },
      { label: 'Agents', link: '/vendor/properties' },
      { label: 'Floyd Miles', active: true }
    ];

    /**
     * Bootstrap validation form data
     */
    this.validationform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });

    /**
   * Bootstrap validation form data
   */
    this.messageform = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      review: ['', [Validators.required]],
    });


    // Data Get Function
    this._fetchData();

    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  // Data Fetch
  private _fetchData() {
    this.listData = listData;
    this.aboutReviewData = aboutReviewData;
    this.latestCarData = latestCarData;
  }

  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 4,
    navigation: true,
    loop: true
  };

 
  LatestCar = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
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
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.modalService.open(content, { centered: true });
    document.querySelector('.modal-content')?.classList.add('border-light');
  }

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

  /**
   * Bootstrap tooltip form validation submit method
   */
  formSubmit() {
    this.formsubmit = true;
  }

  /**
   * returns tooltip validation form
   */
  get formData() {
    return this.messageform.controls;
  }

  // Sort filter
  sortField: any;
  sortBy: any
  SortFilter() {
    this.sortField = (document.getElementById("sorting") as HTMLInputElement).value;
    if (this.sortField[0] == 'A') {
      this.sortBy = 'desc';
      this.sortField = this.sortField.replace(/A/g, '')
    }
    if (this.sortField[0] == 'D') {
      this.sortBy = 'asc';
      this.sortField = this.sortField.replace(/D/g, '')
    }
  }

  // Sort filter
  sortReviewField: any;
  sortReviewBy: any;
  SortReviewFilter() {
    this.sortReviewField = (document.getElementById("review-sorting") as HTMLInputElement).value;
    if (this.sortReviewField[0] == 'A') {
      this.sortReviewBy = 'desc';
      this.sortReviewField = this.sortReviewField.replace(/A/g, '')
    }
    if (this.sortReviewField[0] == 'D') {
      this.sortReviewBy = 'asc';
      this.sortReviewField = this.sortReviewField.replace(/D/g, '')
    }
  }

}
