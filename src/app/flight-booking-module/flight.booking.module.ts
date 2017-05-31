import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { SharedModule } from "../shared-module/shared.module";
import { FormsModule } from "@angular/forms";
import { AbstractPassengerService } from "../service/abstract.passenger.service";
import { PassengerService } from "../service/passenger.service";
import { PassengerCardComponent } from "./passenger-card/passenger-card.component";
import { PassengerValidationErrorsComponent } from "./passenger-validation-errors/passenger-validation-errors.component";
//import { AnonymousPassengerService } from "../service/anonymous.passenger.service";
import { PassengerEditComponent } from './passenger-edit/passenger-edit.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightBookingRouterModule } from "app/flight-booking-module/flight.booking.routes";

@NgModule({
  declarations: [
            PassengerSearchComponent,
            PassengerCardComponent,
            PassengerValidationErrorsComponent,
            PassengerSearchComponent,
            PassengerEditComponent,
            FlightSearchComponent
],
  imports: [
            CommonModule,
            FormsModule,
            SharedModule,
            FlightBookingRouterModule
        ],
  providers: [{provide:AbstractPassengerService,useClass:PassengerService}],
  exports: [
            PassengerSearchComponent
        ]
})
export class FlightBookingModule { }