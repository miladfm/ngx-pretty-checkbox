import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-basic-checkbox',
  templateUrl: './demo-basic-checkbox.component.html',
  styleUrls: ['./demo-basic-checkbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoBasicCheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
