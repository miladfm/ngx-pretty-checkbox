import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-animation-rotate',
  templateUrl: './demo-checkbox-animation-rotate.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxAnimationRotateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
