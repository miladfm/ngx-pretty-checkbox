import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-toggle',
  templateUrl: './demo-checkbox-toggle.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
