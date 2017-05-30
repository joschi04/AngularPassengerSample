import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Passenger } from "../../entity/passenger";

@Component({
    selector: 'passenger-card',
    templateUrl: './passenger-card.component.html',
    styleUrls: ['./passenger-card.component.css']
})
export class PassengerCardComponent{
    @Input() item:Passenger;
    @Input() selected:boolean;
    @Output() selectedChange  = new EventEmitter<boolean>();
    @Output() editChange  = new EventEmitter<Passenger>();

    select(): void {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect(): void {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }

    edit(): void{
        this.editChange.next(this.item);
    }
}
