import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-radio-button-animation',
  templateUrl: './demo-radio-button-animation.component.html',
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
export class DemoRadioButtonAnimationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
