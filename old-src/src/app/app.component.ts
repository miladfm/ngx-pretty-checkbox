import { Component, ViewChild } from '@angular/core';
import {
  NgxPrettyCheckboxComponent,
  PrettyCheckboxAnimation,
  PrettyCheckBoxChange,
  PrettyCheckboxColor,
  PrettyCheckboxShape,
  PrettyCheckboxStroke
} from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stroke1_2: PrettyCheckboxStroke;

  stroke2_2: PrettyCheckboxStroke;
  isSwitch2_2 = true;

}
