import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-animation-jelly',
  templateUrl: './demo-checkbox-animation-jelly.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxAnimationJellyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

