import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-animation-tada',
  templateUrl: './demo-checkbox-animation-tada.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxAnimationTadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
