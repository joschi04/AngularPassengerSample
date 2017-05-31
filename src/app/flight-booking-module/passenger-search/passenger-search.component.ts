import { Component } from '@angular/core';


import { AbstractPassengerService } from "../../service/abstract.passenger.service";
import { Passenger } from "../../entity/passenger";
import { Subject } from "rxjs/Subject";

@Component({
    selector: 'passenger-search',
    templateUrl: './passenger-search.component.html',
    styleUrls: ['./passenger-search.component.css'],
    //providers: [{provide:AbstractPassengerService,useClass:PassengerService}]
})
export class PassengerSearchComponent{
    searchName:string = '';
    passengers: Array<Passenger> = [];
    selectedPassenger:Passenger;
    url = 'http://www.angular.at/api/passenger';
    passengersSelected:any={
        1:true,
        3:true
    }
    afterSearch$ = new Subject<Passenger[]>();

    constructor(private passengerService:AbstractPassengerService) {}

    search():void {
        
        this.passengerService
            .getPassengers(this.searchName)
            .subscribe(
                (passengers: Passenger[]) => {
                    this.passengers = passengers;
                    this.afterSearch$.next(this.passengers);
                },
                (errResponse) => {
                    this.afterSearch$.error(errResponse);
                    console.error('Fehler beim Laden', errResponse);
                }
            );
    }

    edit(p:Passenger){
        this.selectedPassenger = p;

    }

    
}
