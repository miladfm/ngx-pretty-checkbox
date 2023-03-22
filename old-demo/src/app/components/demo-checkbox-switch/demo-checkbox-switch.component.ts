import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckboxStroke } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-checkbox-switch',
  templateUrl: './demo-checkbox-switch.component.html',
  styleUrls: ['./demo-checkbox-switch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxSwitchComponent implements OnInit {

  stroke: PrettyCheckboxStroke;
  isSwitch = true;

  constructor() { }

  ngOnInit() {
  }

}
