import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckboxStroke } from '@lib/ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-checkbox-basic',
  templateUrl: './demo-checkbox-basic.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxBasicComponent implements OnInit {

  stroke: PrettyCheckboxStroke;

  constructor() { }

  ngOnInit() {
  }

}
