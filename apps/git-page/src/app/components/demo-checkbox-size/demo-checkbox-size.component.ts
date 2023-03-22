import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-size',
  templateUrl: './demo-checkbox-size.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxSizeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
