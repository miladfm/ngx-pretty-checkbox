import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-svg',
  templateUrl: './demo-svg.component.html',
  styleUrls: ['./demo-svg.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoSvgComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
