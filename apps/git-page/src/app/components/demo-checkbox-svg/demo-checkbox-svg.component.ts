import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-svg',
  templateUrl: './demo-checkbox-svg.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxSvgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
