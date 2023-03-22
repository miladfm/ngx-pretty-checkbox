import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-scalability',
  templateUrl: './demo-checkbox-scalability.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }

    .content__body p-checkbox {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxScalabilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
