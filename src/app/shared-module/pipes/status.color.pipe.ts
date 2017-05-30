import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'statusColor', pure: true })
export class StatusColorPipe implements PipeTransform {
  transform(passengerStatus: string) {
    switch (passengerStatus)
    {
        case 'A' :
            return 'red';
        case 'B' :
            return 'orange';
        case 'C' :
            return 'green';
        default:
            return 'black';
    }
  }
}