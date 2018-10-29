import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-animation-pulse',
  templateUrl: './demo-animation-pulse.component.html',
  styleUrls: ['./demo-animation-pulse.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoAnimationPulseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
