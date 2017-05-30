import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'statusColor' })
export class StatusColorPipe implements PipeTransform {
  transform(passengerStatus: string) {
    switch (passengerStatus)
    {
        case 'A' :
            return 'red';
        case 'B' :
            return 'yellow';
        case 'C' :
            return 'green';
        default:
            return 'black';
    }
  }
}