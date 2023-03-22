import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-radio-button-color-outline-icon',
  templateUrl: './demo-radio-button-color-outline-icon.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }


    .content__demo p-radio{
      margin: 10px 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoRadioButtonColorOutlineIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
