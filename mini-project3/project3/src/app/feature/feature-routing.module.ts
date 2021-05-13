import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessListingComponent } from './screen/bussiness-listing/bussiness-listing.component';
import { CategoriesComponent } from './screen/categories/categories.component';
import { SigleBussinessComponent } from './screen/sigle-bussiness/sigle-bussiness.component';
import { SubcategoriesComponent } from './screen/subcategories/subcategories.component';

const routes: Routes = [
  {path:'',component:CategoriesComponent},
  {path:'subcategories/:categoryId',component:SubcategoriesComponent},
  {path:'business-listing/:categoryId',component:BussinessListingComponent},
  {path:'sigle-bussiness/:listingId',component:SigleBussinessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
