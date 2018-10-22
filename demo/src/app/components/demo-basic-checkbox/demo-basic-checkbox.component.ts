import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckboxStroke } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-basic-checkbox',
  templateUrl: './demo-basic-checkbox.component.html',
  styleUrls: ['./demo-basic-checkbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoBasicCheckboxComponent implements OnInit {

  stroke: PrettyCheckboxStroke;

  constructor() { }

  ngOnInit() {
  }

}
