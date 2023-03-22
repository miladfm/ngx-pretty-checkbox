import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-disable',
  templateUrl: './demo-checkbox-disable.component.html',
  styleUrls: ['./demo-checkbox-disable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxDisableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
