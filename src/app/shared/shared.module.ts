import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

import { ButtonGroupItem } from './button-group/button-group-item';
import { ButtonGroup } from './button-group/button-group';
import { RadioButtonGroupItem } from './radio-button-group/radio-button-group-item';
import { RadioButtonGroup } from './radio-button-group/radio-button-group';
import { DocUploader } from './doc-uploader/doc-uploader';

const COMPONENTS = [ButtonGroup, ButtonGroupItem, RadioButtonGroup, RadioButtonGroupItem, DocUploader];
const MODULES = [CommonModule, MatButtonModule, MatCheckboxModule, MatIconModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...MODULES],
    exports: [...MODULES, ...COMPONENTS],
    providers: []
})
export class SharedModule {}
