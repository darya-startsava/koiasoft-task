import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface ParticipantsInterface {
    name: string;
    completed: boolean;
    participant: Array<ParticipantInterface>;
}

export interface ParticipantInterface {
    name: string;
    completed: boolean;
    title: string;
}

@Component({
    selector: 'app-right-side-section',
    templateUrl: './right-side-section.component.html',
    styleUrls: ['./right-side-section.component.scss']
})
export class RightSideSectionComponent {
    search = new FormControl('');
    allComplete: boolean = false;

    participants: ParticipantsInterface = {
        name: 'All',
        completed: false,
        participant: [
            { name: 'Person 1', completed: false, title: 'Developer' },
            { name: 'Person 2', completed: false, title: 'Developer' },
            { name: 'Person 3', completed: false, title: 'Project Manager' },
            { name: 'Person 4', completed: false, title: 'Tech lead' },
            { name: 'Person 5', completed: false, title: 'QA' }
        ]
    };

    updateAllComplete() {
        this.allComplete =
            this.participants.participant != null && this.participants.participant.every(t => t.completed);
    }

    someComplete(): boolean {
        if (this.participants.participant == null) {
            return false;
        }
        return this.participants.participant.filter(t => t.completed).length > 0 && !this.allComplete;
    }

    setAll(completed: boolean) {
        this.allComplete = completed;
        if (this.participants.participant == null) {
            return;
        }
        this.participants.participant.forEach(t => (t.completed = completed));
    }
}
