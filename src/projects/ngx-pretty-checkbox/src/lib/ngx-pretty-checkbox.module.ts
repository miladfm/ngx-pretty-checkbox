import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPrettyCheckboxWillChangeComponent } from './components/ngx-pretty-checkbox-will-change/ngx-pretty-checkbox-will-change.component';
import { NgxPrettyCheckboxComponent } from './components/ngx-pretty-checkbox/ngx-pretty-checkbox.component';
import { NgxPrettyHoverWillChangeComponent } from './components/ngx-pretty-hover-will-change/ngx-pretty-hover-will-change.component';
import { NgxPrettyHoverComponent } from './components/ngx-pretty-hover/ngx-pretty-hover.component';
import { NgxPrettyIndeterminateWillChangeComponent } from './components/ngx-pretty-Indeterminate-will-change/ngx-pretty-Indeterminate-will-change.component';
import { NgxPrettyIndeterminateComponent } from './components/ngx-pretty-Indeterminate/ngx-pretty-Indeterminate.component';
import { NgxPrettyRadioWillChangeComponent } from './components/ngx-pretty-radio-will-change/ngx-pretty-radio-will-change.component';
import { NgxPrettyRadioComponent } from './components/ngx-pretty-radio/ngx-pretty-radio.component';
import { NgxPrettyToggleWillChangeComponent } from './components/ngx-pretty-toggle-will-change/ngx-pretty-toggle-will-change.component';
import { NgxPrettyToggleComponent } from './components/ngx-pretty-toggle/ngx-pretty-toggle.component';
import { NgxPrettyIconDirective } from './directives/ngx-pretty-icon.directive';
import { NgxPrettyImageDirective } from './directives/ngx-pretty-image.directive';
import { NgxPrettyRadioGroupDirective } from './directives/ngx-pretty-radio-group.directive';
import { NgxPrettySvgDirective } from './directives/ngx-pretty-svg.directive';

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
  declarations: [ DECLARATIONS ],
  imports: [ CommonModule, FormsModule ],
  exports: [ DECLARATIONS ]
})
export class NgxPrettyCheckboxModule { }
