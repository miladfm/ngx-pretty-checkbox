import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-font-icon',
  templateUrl: './demo-checkbox-font-icon.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxFontIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
