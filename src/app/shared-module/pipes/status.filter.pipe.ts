import { Pipe, PipeTransform } from '@angular/core';
import { Passenger } from "../../entity/passenger";


@Pipe({ name: 'statusFilter', pure: true })
export class StatusFilterPipe implements PipeTransform {
  transform(passengers:Passenger[], filter: string) {
    return passengers.filter(m=>m.passengerStatus===filter);

  }
}