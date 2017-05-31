import { Component, OnInit, } from '@angular/core';
import { Passenger } from "../../entity/passenger";
import { AbstractPassengerService } from "../../service/abstract.passenger.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-passenger-edit',
  templateUrl: './passenger-edit.component.html',
  styleUrls: ['./passenger-edit.component.css']
})
export class PassengerEditComponent implements OnInit {
 
  selectedPassenger:Passenger;
  postResult:string='';
 
  constructor(private passengerService:AbstractPassengerService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.passengerService.getPassengers('').subscribe(
          pList => { 
            this.selectedPassenger = pList.find(p=>p.id==params['id']);
          }
        )
      }
    );
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