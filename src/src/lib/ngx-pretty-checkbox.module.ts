import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPrettyCheckboxComponent } from './components/ngx-pretty-checkbox.component';
import { NgxPrettyIconDirective } from './directives/ngx-pretty-icon.directive';
import { NgxPrettySvgDirective } from './directives/ngx-pretty-svg.directive';
import { FormsModule } from '@angular/forms';
import { NgxPrettyImageDirective } from './directives/ngx-pretty-image.directive';
import { NgxPrettyHoverComponent } from './components/ngx-pretty-hover.component';
import { NgxPrettyIndeterminateComponent } from './components/ngx-pretty-Indeterminate.component';
import { NgxPrettyToggleComponent } from './components/ngx-pretty-toggle.component';
import { NgxPrettyHoverWillChangeComponent } from './components/ngx-pretty-hover-will-change.component';
import { NgxPrettyCheckboxWillChangeComponent } from './components/ngx-pretty-checkbox-will-change.component';
import { NgxPrettyIndeterminateWillChangeComponent } from './components/ngx-pretty-Indeterminate-will-change.component';
import { NgxPrettyToggleWillChangeComponent } from './components/ngx-pretty-toggle-will-change.component';
import { NgxPrettyRadioGroupDirective } from './components/ngx-pretty-radio-group.component';
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
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ DECLARATIONS ],
  exports: [ DECLARATIONS ]
})
export class NgxPrettyCheckboxModule { }
