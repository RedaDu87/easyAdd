import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { SellCarComponent } from "./sell-car/sell-car.component";
import { PropertyPromotionComponent } from "./property-promotion/property-promotion.component";
import { VendorComponent } from "./vendor/vendor.component";

const routes: Routes = [
  {
    path: "sell-car",
    component: SellCarComponent
  },
  {
    path: "property-promotion",
    component: PropertyPromotionComponent
  },
  {
    path: 'vendor',
    component: VendorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VendorRoutingModule { }
