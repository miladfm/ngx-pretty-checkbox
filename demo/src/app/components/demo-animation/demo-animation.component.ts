import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckboxAnimation } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-animation',
  templateUrl: './demo-animation.component.html',
  styleUrls: ['./demo-animation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoAnimationComponent implements OnInit {

  animation: PrettyCheckboxAnimation;
  constructor() { }

  ngOnInit() {
  }

}
