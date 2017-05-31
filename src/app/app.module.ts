import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AbstractPassengerService } from "./service/abstract.passenger.service";
import { PassengerService } from "./service/passenger.service";
import { BASE_URL } from "app/app.tokens";
import { FlightBookingModule } from "./flight-booking-module/flight.booking.module";
import { HttpModule } from "@angular/http";
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    FlightBookingModule,
    AppRouterModule
  ],
  providers: [
        //{provide:AbstractPassengerService,useClass:PassengerService},
        {provide:BASE_URL,useValue:'http://www.angular.at/api/'}
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
