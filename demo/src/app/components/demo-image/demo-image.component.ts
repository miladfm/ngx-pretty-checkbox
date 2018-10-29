import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-demo-image',
  templateUrl: './demo-image.component.html',
  styleUrls: ['./demo-image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
