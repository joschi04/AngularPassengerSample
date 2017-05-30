import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { AbstractPassengerService } from "./service/abstract.passenger.service";
import { PassengerService } from "./service/passenger.service";
import { BASE_URL } from "app/app.tokens";

@NgModule({
  declarations: [
    AppComponent,
    PassengerSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
        //{provide:AbstractPassengerService,useClass:PassengerService},
        {provide:BASE_URL,useValue:'http://www.angular.at/api/'},
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
