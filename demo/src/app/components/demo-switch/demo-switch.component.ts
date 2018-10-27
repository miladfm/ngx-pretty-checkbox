import { Component, OnInit } from '@angular/core';
import { PrettyCheckboxStroke } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-switch',
  templateUrl: './demo-switch.component.html',
  styleUrls: ['./demo-switch.component.css']
})
export class DemoSwitchComponent implements OnInit {

  stroke: PrettyCheckboxStroke;
  isSwitch = true;

  constructor() { }

  ngOnInit() {
  }

}
