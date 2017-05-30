import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { StatusPipe } from "./pipes/status.pipe";
import { StatusColorPipe } from "./pipes/status.color.pipe";
import { StatusFilterPipe } from "./pipes/status.filter.pipe";


@NgModule({
  declarations: [
            StatusPipe,
            StatusColorPipe,
            StatusFilterPipe
        ],
  imports: [
            CommonModule
        ],
  providers: [],
  exports: [
            StatusPipe,
            StatusColorPipe,
            StatusFilterPipe
            ]
})
export class SharedModule { }