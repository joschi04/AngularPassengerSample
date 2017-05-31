import { TestBed, async } from '@angular/core/testing';
import { PassengerSearchComponent } from "../passenger-search/passenger-search.component";
import { FlightBookingModule } from "../flight.booking.module";
import { BASE_URL } from "../../app.tokens";
import { HttpModule } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { By } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Passenger } from "../../entity/passenger";
import { AbstractPassengerService } from "../../service/abstract.passenger.service";


let passengerServiceMock = {
  getPassengers(searchName: string):Observable<Passenger[]> {
    return Observable.of([
      {id: "1", name:"name", firstName:'firstName', bonusMiles:5, passengerStatus:'A' }]);
  }
}

describe('PassengerSearchComponentWithBackendMock', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        
      ],
      imports: [
        HttpModule,
        FlightBookingModule
      ],
      providers:[{ provide: BASE_URL, useValue: 'http://www.angular.at/api/' }]
    }).compileComponents();

     TestBed.overrideComponent(PassengerSearchComponent, {
      set: {
        providers: [
          { provide: AbstractPassengerService, useValue: passengerServiceMock}
        ]
      }
    }).compileComponents();

  }));

  
  it('mock http', () => {
    const fixture = TestBed.createComponent(PassengerSearchComponent);
    
    const nativeDomElement = fixture.nativeElement;
    const domElement = fixture.debugElement; //Wrapped dom Element
    
    expect(domElement
            .query(By.css('h1'))
            .nativeElement.textContent)
            .toBe( 'Passenger Search');
  });
});
