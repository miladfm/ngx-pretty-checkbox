import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-plain',
  templateUrl: './demo-checkbox-plain.component.html',
  styleUrls: ['./demo-checkbox-plain.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxPlainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
