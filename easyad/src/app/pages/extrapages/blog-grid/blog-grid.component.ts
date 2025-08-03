import { Component, OnInit } from '@angular/core';

import { blogs } from './blog-grid.model';
import { blogsData } from './data';

@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss']
})

/**
 * BlogGrid Component
 */
export class BlogGridComponent implements OnInit {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  blogsData!: blogs[];
  term:any;

  constructor() { }

  ngOnInit(): void {
    /**
   * BreadCrumb
   */
    this.breadCrumbItems = [
      { label: 'Home', link:'' },
      { label: 'News & reviews', active: true }
    ];

    // Data Get Function
    this._fetchData();
    if (document.documentElement.scrollTop > 40) {
      document.querySelector('.navbar')?.classList.add('navbar-stuck');
    }
  }

  // Data Fetch
  private _fetchData() {
    this.blogsData = blogsData;
    this.blogDatas = Object.assign([], this.blogsData);
  }

  /**
   * Swiper setting
   */
   config = {
    initialSlide: 0,
    slidesPerView: 1,
    pagination: true,
    navigation: true
  };

  blogDatas:any;
  // Category Filter
  categoriesFilter(){
    var category = (document.getElementById("categories") as HTMLInputElement).value;
    if(category){
      this.blogDatas = this.blogsData.filter( (data:any) => {
        return data.sub_title === category;
      });
    }
    else{
      this.blogDatas = this.blogsData;
    }
  }

   // Sort filter
 sortField:any;
 sortBy:any
 SortFilter(){
   this.sortField = (document.getElementById("sortby") as HTMLInputElement).value;
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
