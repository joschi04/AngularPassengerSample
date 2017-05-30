import { Component } from '@angular/core';


import { AbstractPassengerService } from "../../service/abstract.passenger.service";
import { Passenger } from "../../entity/passenger";

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
    postResult:string='';
    url = 'http://www.angular.at/api/passenger';

    constructor(private passengerService:AbstractPassengerService) {}

    search():void {
        
        this.passengerService
            .getPassengers(this.searchName)
            .subscribe(
                (passengers: Passenger[]) => {
                    this.passengers = passengers;
                },
                (errResponse) => {
                    console.error('Fehler beim Laden', errResponse);
                }
            );
    }

    select(p:Passenger){
        this.selectedPassenger = p;
    }

    save(){
        this.passengerService
            .savePassenger(this.selectedPassenger)
            .subscribe(
                (passenger: Passenger) => {
                    this.selectedPassenger = passenger;
                    this.postResult = 'OK';
                },
                (errResponse) => {
                    console.error('Fehler beim Laden', errResponse);
                    this.postResult = errResponse;
                }
            );
    }
}