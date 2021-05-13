import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './_shared/nav-bar/nav-bar.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

import { SerVesComponent } from './ser-ves/ser-ves.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PricingComponent } from './pricing/pricing.component';
import { FaqComponent } from './faq/faq.component';

const router:Routes =[
{path:'home',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'banner',component:BannerComponent},
{path:'contact',component:ContactComponent},
{path:'team',component:TeamComponent},
{path:'navbar',component:NavBarComponent },
{path:'serves',component:SerVesComponent},
{path:'testimonials',component:TestimonialsComponent},
{path:'pricing',component:PricingComponent},
{path:'faq',component:FaqComponent},
{path:'',component:HomeComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    NavBarComponent,
  
    SerVesComponent,
    TestimonialsComponent,
    PricingComponent,
    FaqComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
