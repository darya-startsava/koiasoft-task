import { Injectable } from '@angular/core';

interface FormDataInterface {
    meetingType: string;
    meetingName: string;
}

@Injectable({
    providedIn: 'root'
})
export class CollectDataService {
    meetingName = 'CompanyName Board Meeting No.12';
    meetingType = 'board-meeting';
    constructor() {}

    getFormData(): FormDataInterface {
        return { meetingType: this.meetingType, meetingName: this.meetingName };
    }

    saveMeetingType(meetingType: string) {
        this.meetingType = meetingType;
    }

    saveMeetingName(meetingName: string) {
        this.meetingName = meetingName;
    }
}
