import { TestBed, async } from '@angular/core/testing';
import { PassengerSearchComponent } from "../passenger-search/passenger-search.component";
import { FlightBookingModule } from "../flight.booking.module";
import { BASE_URL } from "../../app.tokens";
import { HttpModule } from "@angular/http";
import 'rxjs/add/operator/map';
import { By } from "@angular/platform-browser";
import { Observable } from "rxjs/Observable";
import { Passenger } from "../../entity/passenger";


describe('PassengerSearchComponent', () => {
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
  }));

  it('should create the PassengerSearchComponent', () => {
    const fixture = TestBed.createComponent(PassengerSearchComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined()
  });

  it('search Passengers with async', async(() => {
    const fixture = TestBed.createComponent(PassengerSearchComponent);
    const component = fixture.componentInstance;
    component.afterSearch$.subscribe(
        passengers => {
            
        },
        error => {
            fail();
        }
    );

    component.search()
    
  }));

  it('search Passengers with done', (done:Function) => {
    const fixture = TestBed.createComponent(PassengerSearchComponent);
    const component = fixture.componentInstance;
    component.afterSearch$.subscribe(
        passengers => {
            done();
        },
        error => {
            fail();
            done();
        }
    );

    component.search()
    
  });
  it('test dom', () => {
    const fixture = TestBed.createComponent(PassengerSearchComponent);
    
    const nativeDomElement = fixture.nativeElement;
    const domElement = fixture.debugElement; //Wrapped dom Element
    
    expect(domElement
            .query(By.css('h1'))
            .nativeElement.textContent)
            .toBe( 'Passenger Search');
  });
  
});
