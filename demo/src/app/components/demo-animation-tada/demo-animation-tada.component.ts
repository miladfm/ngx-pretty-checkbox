import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-animation-tada',
  templateUrl: './demo-animation-tada.component.html',
  styleUrls: ['./demo-animation-tada.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoAnimationTadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
