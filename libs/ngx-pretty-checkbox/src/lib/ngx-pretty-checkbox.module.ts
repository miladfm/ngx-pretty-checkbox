import { NgModule } from '@angular/core';
import { NgxPrettyIconDirective } from './directives/ngx-pretty-icon.directive';
import { NgxPrettyImageDirective } from './directives/ngx-pretty-image.directive';
import { NgxPrettyRadioGroupDirective } from './directives/ngx-pretty-radio-group.directive';
import { NgxPrettySvgDirective } from './directives/ngx-pretty-svg.directive';
import { NgxPrettyCheckboxComponent } from './components/ngx-pretty-checkbox.component';
import { NgxPrettyCheckboxWillChangeComponent } from './components/ngx-pretty-checkbox-will-change.component';
import { NgxPrettyToggleComponent } from './components/ngx-pretty-toggle.component';
import { NgxPrettyToggleWillChangeComponent } from './components/ngx-pretty-toggle-will-change.component';
import { NgxPrettyHoverComponent } from './components/ngx-pretty-hover.component';
import { NgxPrettyHoverWillChangeComponent } from './components/ngx-pretty-hover-will-change.component';
import { NgxPrettyIndeterminateComponent } from './components/ngx-pretty-Indeterminate.component';
import { NgxPrettyIndeterminateWillChangeComponent } from './components/ngx-pretty-Indeterminate-will-change.component';
import { NgxPrettyRadioComponent } from './components/ngx-pretty-radio.component';
import { NgxPrettyRadioWillChangeComponent } from './components/ngx-pretty-radio-will-change.component';

const DECLARATIONS = [
    NgxPrettyCheckboxComponent,
    NgxPrettyCheckboxWillChangeComponent,

    NgxPrettyIconDirective,
    NgxPrettySvgDirective,
    NgxPrettyImageDirective,

    NgxPrettyToggleComponent,
    NgxPrettyToggleWillChangeComponent,

    NgxPrettyHoverComponent,
    NgxPrettyHoverWillChangeComponent,

    NgxPrettyIndeterminateComponent,
    NgxPrettyIndeterminateWillChangeComponent,

    NgxPrettyRadioGroupDirective,
    NgxPrettyRadioComponent,
    NgxPrettyRadioWillChangeComponent
];


@NgModule({
    imports: [ DECLARATIONS ],
    exports: [ DECLARATIONS ]
})
export class NgxPrettyCheckboxModule { }
