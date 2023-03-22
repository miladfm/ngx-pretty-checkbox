import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckboxColor } from '@lib/ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-checkbox-color',
  templateUrl: './demo-checkbox-color.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxColorComponent implements OnInit {

  color: PrettyCheckboxColor;

  constructor() { }

  ngOnInit() {
  }

}
