import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-plain',
  templateUrl: './demo-plain.component.html',
  styleUrls: ['./demo-plain.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoPlainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
