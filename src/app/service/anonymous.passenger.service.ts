import { Injectable, Inject } from '@angular/core';
import { Http, URLSearchParams, Headers } from "@angular/http";

import { Passenger } from "../entity/passenger";
import { Observable } from "rxjs/Observable";
import { BASE_URL } from "../app.tokens";
import { AbstractPassengerService } from "app/service/abstract.passenger.service";

@Injectable()
export class AnonymousPassengerService implements AbstractPassengerService {
    constructor(@Inject(BASE_URL)private url:string,private http:Http){}


    getPassengers(searchName:string):Observable<Passenger[]> {
        let url = this.url + 'passenger';

        let search = new URLSearchParams();
        search.set('name', searchName);

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this.http
            .get(url, { search, headers})
            .map(resp => {
                let passengers: Passenger[] = resp.json();
            
                return passengers
                    .map(p => { 
                        return { 
                            id: p.id, 
                            name: '***', 
                            firstName: '***', 
                            passengerStatus: p.passengerStatus, 
                            bonusMiles: p.bonusMiles 
                        } 
                    });
            });
    }

    savePassenger(p:Passenger):Observable<Passenger> {

        let url = this.url + 'passenger';

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        return this.http
            .post(url,p, { headers})
            .map(resp => resp.json());
    }
}