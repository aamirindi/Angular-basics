import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import {MatIconModule} from '@angular/material/icon';
import { PhoneComponent } from './phone/phone.component';
import { VisionComponent } from './vision/vision.component';
import { ShoppingComponent } from './shopping/shopping.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    PhoneComponent,
    VisionComponent,
    ShoppingComponent,
  ],
  imports: [
    BrowserModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
