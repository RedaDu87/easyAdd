import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbCarouselModule, NgbAccordionModule, NgbTooltipModule, NgbCollapseModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

// Google Map
import { GoogleMapsModule } from '@angular/google-maps';

// Youtube Player
import { YouTubePlayerModule } from '@angular/youtube-player';

// Component
import { ExtraPagesRoutingModule } from "./extrapages-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { AboutComponent } from './about/about.component';
import { BlogGridComponent } from './blog-grid/blog-grid.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HelpCenterComponent } from './help-center/help-center.component';

import { SortByExtraPagesPipe } from "../extrapages/sort-by.pipe";

@NgModule({
  declarations: [
    AboutComponent,
    BlogGridComponent,
    SingleBlogComponent,
    ContactsComponent,
    HelpCenterComponent,
    SortByExtraPagesPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbCarouselModule,
    NgbAccordionModule,
    NgbTooltipModule,
    NgbCollapseModule,
    NgbNavModule,
    ExtraPagesRoutingModule,
    SharedModule,
    GoogleMapsModule,
    SlickCarouselModule,
    YouTubePlayerModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ExtrapagesModule { }
