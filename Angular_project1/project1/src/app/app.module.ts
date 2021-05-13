import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './_shared/nav-bar/nav-bar.component';
import { StudentComponent } from './student/student.component';
import { AdmissionComponent } from './admission/admission.component';
import { FeesComponent } from './fees/fees.component';
import { CoursesComponent } from './courses/courses.component';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

const router:Routes=[

  
  {path:'student',component:StudentComponent},
  {path:'admission',component:AdmissionComponent},
  {path:'fees',component:FeesComponent},
  {path:'courses',component:CoursesComponent},
  // {path:'navBar',component:NavBarComponent},
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent, pathMatch:'full'}, 
  {path:'**',component:HomeComponent}, 


]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StudentComponent,
    AdmissionComponent,
    FeesComponent,
    CoursesComponent,
    LoginComponent,
    HomeComponent,
   
  
  ],
  imports: [
    BrowserModule,
  //  RouterModule.forRoot(router, {useHash:true})
   RouterModule.forRoot(router),
   HttpClientModule,
   FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
