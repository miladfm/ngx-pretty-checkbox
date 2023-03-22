import { OnInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { PrettyCheckboxAnimation } from '@lib/ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-checkbox-animation',
  templateUrl: './demo-checkbox-animation.component.html',
  styles: [`
    :host {
      margin: 20px;
      display: block;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoCheckboxAnimationComponent implements OnInit {

  animation: PrettyCheckboxAnimation;
  constructor() { }

  ngOnInit() {
  }

}
