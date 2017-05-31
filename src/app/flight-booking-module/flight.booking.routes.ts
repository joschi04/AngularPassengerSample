import { Routes, RouterModule } from '@angular/router';
import { PassengerSearchComponent } from "./passenger-search/passenger-search.component";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { PassengerEditComponent } from "./passenger-edit/passenger-edit.component";

const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    {
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'passenger-edit/:id',
        component: PassengerEditComponent
    }
];

export const FlightBookingRouterModule = RouterModule.forChild(FLIGHT_BOOKING_ROUTES);
                                            //         ^
                                            //         |
                                            //         +------> Für Feature Module !!!
