import { AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { RadioButtonGroupItem } from './radio-button-group-item';
import { MAT_CHECKBOX_DEFAULT_OPTIONS } from '@angular/material/checkbox';

@Component({
    selector: 'radio-button-group',
    template: '<ng-content></ng-content>',
    providers: [{ provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } }]
})
export class RadioButtonGroup implements AfterContentInit {
    @Output() readonly change = new EventEmitter<RadioButtonGroupItem>();
    @ContentChildren(RadioButtonGroupItem) items: QueryList<RadioButtonGroupItem>;
    ngAfterContentInit(): void {
        this.items.forEach(i => {
            i.change.subscribe(item => {
                this.select(item);
                this.change.emit(item);
            });
        });
    }

    public select(item: RadioButtonGroupItem): void {
        this.items.forEach(i => {
            i.isChecked = false;
        });
        item.isChecked = true;
    }
}
