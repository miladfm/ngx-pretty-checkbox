import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-radio-button-color',
  templateUrl: './demo-radio-button-color.component.html',
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
export class DemoRadioButtonColorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
