import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'passenger-validation-errors',
    templateUrl: 'passenger-validation-errors.component.html'
})
export class PassengerValidationErrorsComponent implements OnInit {
    @Input() f:any;

    constructor() { }

    ngOnInit() { }
}