import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { StatusPipe } from "./pipes/status.pipe";
import { StatusColorPipe } from "./pipes/status.color.pipe";
import { StatusFilterPipe } from "./pipes/status.filter.pipe";
import { PassengerNameDirective } from "./directives/passenger-name.directive";
import { PublicPeopleDirective } from "./directives/public-people.directive";


@NgModule({
  declarations: [
            StatusPipe,
            StatusColorPipe,
            StatusFilterPipe,
            PassengerNameDirective,
            PublicPeopleDirective
        ],
  imports: [
            CommonModule
        ],
  providers: [],
  exports: [
            StatusPipe,
            StatusColorPipe,
            StatusFilterPipe,
            PassengerNameDirective,
            PublicPeopleDirective
            ]
})
export class SharedModule { }