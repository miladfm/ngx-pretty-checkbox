import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-plain',
  templateUrl: './demo-checkbox-plain.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxPlainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
