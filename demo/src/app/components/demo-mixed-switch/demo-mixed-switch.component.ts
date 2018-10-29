import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-mixed-switch',
  templateUrl: './demo-mixed-switch.component.html',
  styleUrls: ['./demo-mixed-switch.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MixedSwitchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
