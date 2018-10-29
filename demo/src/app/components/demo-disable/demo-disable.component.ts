import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-disable',
  templateUrl: './demo-disable.component.html',
  styleUrls: ['./demo-disable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoDisableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
