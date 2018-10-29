import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-mixed-color',
  templateUrl: './demo-mixed-color.component.html',
  styleUrls: ['./demo-mixed-color.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MixedColorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
