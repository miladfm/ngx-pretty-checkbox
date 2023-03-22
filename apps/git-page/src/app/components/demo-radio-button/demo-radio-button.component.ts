import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-radio-button',
  templateUrl: './demo-radio-button.component.html',
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
export class DemoRadioButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
