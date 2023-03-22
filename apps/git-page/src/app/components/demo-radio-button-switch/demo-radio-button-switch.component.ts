import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-radio-button-switch',
  templateUrl: './demo-radio-button-switch.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }


    .content__demo p-radio{
      margin-top:20px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoRadioButtonSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
