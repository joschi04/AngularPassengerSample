import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from "@angular/forms";

@Directive({ 
    selector: 'input[passengerNames]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PassengerNameDirective,
            multi: true
        }
    ]
})
export class PassengerNameDirective implements Validator {
    @Input() passengerNames:string = '';
    @Input() x:string = '';

    validate(c: AbstractControl): ValidationErrors {
        let passengerNameList = this.passengerNames.split(',');
        if (passengerNameList.indexOf(c.value) > -1) {
            return {};
        }

        return { PassengerNameError:{ value:c.value, allowed:this.passengerNames } }
    }
}