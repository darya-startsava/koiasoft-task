import { Component, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'button-group-item',
    templateUrl: './button-group-item.html'
})
export class ButtonGroupItem {
    @Input() id: string;
    @Input() isActive: boolean = false;
    readonly change = new EventEmitter<ButtonGroupItem>();
    public toggle(): void {
        this.isActive = !this.isActive;
        this.change.emit(this);
    }
}
