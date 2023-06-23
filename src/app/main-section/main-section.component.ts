import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ButtonGroupItem } from '../shared/button-group/button-group-item';
import { RadioButtonGroupItem } from '../shared/radio-button-group/radio-button-group-item';
import { FormControl } from '@angular/forms';
import { CollectDataService } from '../collect-data.service';

export interface TimeInterface {
    value: number;
    time: string;
}

@Component({
    selector: 'app-main-section',
    templateUrl: './main-section.component.html',
    styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
    points: Array<TimeInterface> = [
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

    meetingName = new FormControl('');
    meetingAddress = new FormControl('');
    meetingLink = new FormControl('');
    meetingForm = 'offline';
    startDate = new Date();

    constructor(private collectDataService: CollectDataService) {}

    @Output()
    dateChange: EventEmitter<MainSectionComponent> = new EventEmitter();

    onDateChange(): void {
      this.dateChange.emit();
    }

    ngOnInit() {
        this.meetingLink.disable();
        this.meetingName.setValue(this.collectDataService.meetingName);
    }

    onChange(): void {
        this.collectDataService.saveMeetingName(this.meetingName.value || '');
    }

    onClearMeetingNameField(): void {
        this.meetingName.setValue('');
        this.collectDataService.saveMeetingName('');
    }

    onButtonGroupChange($event: ButtonGroupItem) {
        this.collectDataService.saveMeetingType($event.id);
    }

    onRadioButtonGroupChange($event: RadioButtonGroupItem) {
        if ($event.id) {
            console.log(`${$event.id} - ${$event.isChecked}`);
            this.meetingForm = $event.id;
            if (this.meetingForm === 'online') {
                this.meetingAddress.disable();
                this.meetingAddress.setValue('');
                this.meetingLink.enable();
            } else {
                this.meetingAddress.enable();
                this.meetingLink.disable();
                this.meetingLink.setValue('');
            }
        }
    }

    onDocUploaderChange($event: File[]) {
        console.log($event.map(f => f.name).join('\n'));
    }
}
