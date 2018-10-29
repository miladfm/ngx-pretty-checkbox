import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-scalability',
  templateUrl: './demo-scalability.component.html',
  styleUrls: ['./demo-scalability.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoScalabilityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
