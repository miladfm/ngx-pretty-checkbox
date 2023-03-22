import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-disable',
  templateUrl: './demo-checkbox-disable.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxDisableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
