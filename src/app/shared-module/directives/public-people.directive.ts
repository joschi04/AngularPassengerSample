import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, FormGroup, NG_VALIDATORS } from "@angular/forms";

@Directive({ 
    selector: 'form[publicPeople]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PublicPeopleDirective,
            multi: true
        }
    ]
})
export class PublicPeopleDirective  implements Validator {
    @Input() publicPeople:string = '';
    
    validate(c: AbstractControl): ValidationErrors {
        let group: FormGroup = c as FormGroup; // Typumwandlung
        let nameCtrl = group.controls['searchName'];
        let publicPeopleList = this.publicPeople.split(',');
        if (nameCtrl !== undefined && publicPeopleList.indexOf(nameCtrl.value) < 0) {
            return { };
        }

        return { PublicPeopleError:{ value:c.value, notallowed:this.publicPeople } };
    }
}