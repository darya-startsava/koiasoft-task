import { Component } from '@angular/core';
import { CollectDataService } from '../collect-data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(private collectDataService: CollectDataService) {}

    saveMeetingData(): void {
        console.log(this.collectDataService.getFormData());
    }
}
