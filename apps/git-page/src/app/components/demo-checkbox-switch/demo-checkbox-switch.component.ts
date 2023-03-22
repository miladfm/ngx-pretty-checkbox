import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckboxStroke } from '@lib/ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-checkbox-switch',
  templateUrl: './demo-checkbox-switch.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxSwitchComponent implements OnInit {

  stroke: PrettyCheckboxStroke;
  isSwitch = true;

  constructor() { }

  ngOnInit() {
  }

}
