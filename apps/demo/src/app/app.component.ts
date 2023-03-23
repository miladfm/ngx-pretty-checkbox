import {ChangeDetectorRef, Component, inject} from '@angular/core';
import {
  NgxPrettyCheckboxModule,
  NgxPrettyCheckboxComponent,
  NgxPrettyCheckboxWillChangeComponent,
  NgxPrettyHoverComponent,
  NgxPrettyHoverWillChangeComponent,
  NgxPrettyIconDirective,
  NgxPrettyImageDirective,
  NgxPrettyIndeterminateComponent,
  NgxPrettyIndeterminateWillChangeComponent,
  NgxPrettyRadioComponent,
  NgxPrettyRadioGroupDirective,
  NgxPrettyRadioWillChangeComponent,
  NgxPrettySvgDirective,
  NgxPrettyToggleComponent,
  NgxPrettyToggleWillChangeComponent,
  PrettyCheckboxStroke, PrettyCheckBoxChange
} from '@lib/ngx-pretty-checkbox';
import {FormsModule} from "@angular/forms";

@Component({
  standalone: true,
  imports: [
    FormsModule,
    NgxPrettyCheckboxModule
    // NgxPrettyCheckboxComponent,
    // NgxPrettyCheckboxWillChangeComponent,
    // NgxPrettyHoverComponent,
    // NgxPrettyHoverWillChangeComponent,
    // NgxPrettyIndeterminateComponent,
    // NgxPrettyIndeterminateWillChangeComponent,
    // NgxPrettyRadioComponent,
    // NgxPrettyRadioWillChangeComponent,
    // NgxPrettyToggleComponent,
    // NgxPrettyToggleWillChangeComponent,
    // NgxPrettyIconDirective,
    // NgxPrettyImageDirective,
    // NgxPrettyRadioGroupDirective,
    // NgxPrettySvgDirective
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      margin: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #ccc;
    }

    .row--column {
      flex-direction: column;
      align-items: flex-start;
    }

    .row > * {
      margin-right: 30px;
    }
  `]
})
export class AppComponent {
  stroke1_2: PrettyCheckboxStroke;

  stroke2_2: PrettyCheckboxStroke;
  isSwitch2_2 = true;

  statelessValue = true;


  private cd = inject(ChangeDetectorRef);


  onStatelessInputChange(change: PrettyCheckBoxChange) {
    console.log('STATELESS VALUE CHANGES', change);
    setTimeout(_ => {
      this.statelessValue = change.checked;
      this.cd.detectChanges();
    })
    console.log('statelessValue CHANGED', this.statelessValue);

  }
}