import { Component } from '@angular/core';
import { ButtonGroupItem } from '../shared/button-group/button-group-item';

@Component({
    selector: 'app-main-section',
    templateUrl: './main-section.component.html',
    styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent {
    points: Array<Time> = [
        { value: 0, time: '8.00' },
        { value: 1, time: '8.30' },
        { value: 2, time: '9.00' },
        { value: 3, time: '9.30' },
        { value: 4, time: '10.00' },
        { value: 5, time: '10.30' },
        { value: 6, time: '11.00' },
        { value: 7, time: '11.30' },
        { value: 8, time: '12.00' },
        { value: 9, time: '12.30' },
        { value: 10, time: '13.00' },
        { value: 11, time: '13.30' },
        { value: 12, time: '14.00' }
    ];
    onClearMeetingNameField(): void {
        console.log('clear');
    }

    onButtonGroupChange($event: ButtonGroupItem) {
        alert(`${$event.id} - ${$event.isActive}`);
    }
}

export interface Time {
    value: number;
    time: string;
}
