import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SlideComponent } from './shared/slide/slide.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContentComponent } from './shared/content/content.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    FooterComponent,
    ContentComponent,
  
  ],
  imports: [
    BrowserModule,
  
    AppRoutingModule,
  HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
