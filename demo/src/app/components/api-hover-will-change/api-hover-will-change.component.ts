import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-api-hover-will-change',
  templateUrl: './api-hover-will-change.component.html',
  styleUrls: ['./api-hover-will-change.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiHoverWillChangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
