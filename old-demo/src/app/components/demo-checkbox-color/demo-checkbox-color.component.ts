import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckboxColor } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-checkbox-color',
  templateUrl: './demo-checkbox-color.component.html',
  styleUrls: ['./demo-checkbox-color.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxColorComponent implements OnInit {

  color: PrettyCheckboxColor;

  constructor() { }

  ngOnInit() {
  }

}
