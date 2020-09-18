import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-checkbox-toggle',
  templateUrl: './demo-checkbox-toggle.component.html',
  styleUrls: ['./demo-checkbox-toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
