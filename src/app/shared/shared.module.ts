import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ButtonGroupItem } from './button-group/button-group-item';
import { ButtonGroup } from './button-group/button-group';

const COMPONENTS = [ButtonGroup, ButtonGroupItem];
const MODULES = [CommonModule, MatButtonModule];

@NgModule({
    declarations: [...COMPONENTS],
    imports: [...MODULES],
    exports: [...MODULES, ...COMPONENTS],
    providers: []
})
export class SharedModule {}
