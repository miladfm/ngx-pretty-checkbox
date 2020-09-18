import { OnInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { PrettyCheckboxAnimation } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-checkbox-animation',
  templateUrl: './demo-checkbox-animation.component.html',
  styleUrls: ['./demo-checkbox-animation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxAnimationComponent implements OnInit {

  animation: PrettyCheckboxAnimation;
  constructor() { }

  ngOnInit() {
  }

}
