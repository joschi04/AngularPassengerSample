import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { SharedModule } from "../shared-module/shared.module";
import { FormsModule } from "@angular/forms";
import { AbstractPassengerService } from "../service/abstract.passenger.service";
import { PassengerService } from "../service/passenger.service";
//import { AnonymousPassengerService } from "../service/anonymous.passenger.service";

@NgModule({
  declarations: [
            PassengerSearchComponent
        ],
  imports: [
            CommonModule,
            FormsModule,
            SharedModule
        ],
  providers: [{provide:AbstractPassengerService,useClass:PassengerService}],
  exports: [
            PassengerSearchComponent
        ]
})
export class FlightBookingModule { }