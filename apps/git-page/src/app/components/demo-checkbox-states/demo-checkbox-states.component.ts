import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgxPrettyCheckboxComponent } from '@lib/ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-checkbox-states',
  templateUrl: './demo-checkbox-states.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxStatesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setIndeterminate( prettyCheckbox: NgxPrettyCheckboxComponent) {
    prettyCheckbox.setIndeterminate();
  }

}
