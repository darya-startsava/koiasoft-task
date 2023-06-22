import { Component, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'radio-button-group-item',
    templateUrl: './radio-button-group-item.html'
})
export class RadioButtonGroupItem {
    @Input() id: string;
    @Input() isChecked: boolean = false;
    readonly change = new EventEmitter<RadioButtonGroupItem>();
    public toggle(): void {
        this.isChecked = !this.isChecked;
        this.change.emit(this);
    }
}
