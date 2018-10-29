import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-lock',
  templateUrl: './demo-lock.component.html',
  styleUrls: ['./demo-lock.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoLockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
