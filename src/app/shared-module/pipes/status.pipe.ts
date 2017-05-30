import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'status' })
export class StatusPipe implements PipeTransform {
  transform(passengerStatus: string) {
    switch (passengerStatus)
    {
        case 'A' :
            return 'Senator (SEN)';
        case 'B' :
            return 'Frequent Traveler (FTL)';
        case 'C' :
            return 'Passenger (-)';
        default:
            return 'unknown';
    }
  }
}