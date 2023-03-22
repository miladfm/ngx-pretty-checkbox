import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-animation-pulse',
  templateUrl: './demo-checkbox-animation-pulse.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoAnimationCheckboxPulseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
