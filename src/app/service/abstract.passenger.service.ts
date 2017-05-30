import { Observable } from "rxjs/Observable";
import { Passenger } from "app/entity/passenger";

export abstract class AbstractPassengerService {
    
    abstract getPassengers(searchName:string):Observable<Passenger[]>;

    abstract savePassenger(p:Passenger):Observable<Passenger>;
}