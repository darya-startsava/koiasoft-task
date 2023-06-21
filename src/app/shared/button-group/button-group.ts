import { AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { ButtonGroupItem } from './button-group-item';

@Component({
    selector: 'button-group',
    template: '<ng-content></ng-content>'
})
export class ButtonGroup implements AfterContentInit {
    @Output() readonly change = new EventEmitter<ButtonGroupItem>();
    @ContentChildren(ButtonGroupItem) items: QueryList<ButtonGroupItem>;
    ngAfterContentInit(): void {
        this.items.forEach(i => {
            i.change.subscribe(item => {
                this.select(item);
                this.change.emit(item);
            });
        });
    }

    public select(item: ButtonGroupItem): void {
        this.items.forEach(i => {
            i.isActive = false;
        });
        item.isActive = true;
    }
}
