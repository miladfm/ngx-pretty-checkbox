import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgxPrettyCheckboxComponent } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-checkbox-states',
  templateUrl: './demo-checkbox-states.component.html',
  styleUrls: ['./demo-checkbox-states.component.css'],
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
