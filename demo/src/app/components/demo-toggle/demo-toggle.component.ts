import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-toggle',
  templateUrl: './demo-toggle.component.html',
  styleUrls: ['./demo-toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
