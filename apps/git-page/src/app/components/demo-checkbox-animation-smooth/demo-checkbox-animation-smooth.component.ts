import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-animation-smooth',
  templateUrl: './demo-checkbox-animation-smooth.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxAnimationSmoothComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
