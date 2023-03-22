import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-lock',
  templateUrl: './demo-checkbox-lock.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxLockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
