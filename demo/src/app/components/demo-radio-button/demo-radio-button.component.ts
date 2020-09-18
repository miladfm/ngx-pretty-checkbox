import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-radio-button',
  templateUrl: './demo-radio-button.component.html',
  styleUrls: ['./demo-radio-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoRadioButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
