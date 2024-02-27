import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { PhoneComponent } from './phone/phone.component';
import { VisionComponent } from './vision/vision.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CarouselComponent } from './carousel/carousel.component';
import {MatIconModule} from '@angular/material/icon';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    PhoneComponent,
    VisionComponent,
    ShoppingComponent,
    CarouselComponent,
    FooterComponent,
  ],  
  imports: [
    BrowserModule,
    MatIconModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
