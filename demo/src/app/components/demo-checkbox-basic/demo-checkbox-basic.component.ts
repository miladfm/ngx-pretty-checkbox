import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckboxStroke } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-checkbox-basic',
  templateUrl: './demo-checkbox-basic.component.html',
  styleUrls: ['./demo-checkbox-basic.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxBasicComponent implements OnInit {

  stroke: PrettyCheckboxStroke;

  constructor() { }

  ngOnInit() {
  }

}
