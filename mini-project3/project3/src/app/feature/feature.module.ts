import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { CategoriesComponent } from './screen/categories/categories.component';
import { SubcategoriesComponent } from './screen/subcategories/subcategories.component';
import { TestComponent } from './screen/test/test.component';
import { BussinessListingComponent } from './screen/bussiness-listing/bussiness-listing.component';
import { SigleBussinessComponent } from './screen/sigle-bussiness/sigle-bussiness.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    SubcategoriesComponent,
    BussinessListingComponent,
    SigleBussinessComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
