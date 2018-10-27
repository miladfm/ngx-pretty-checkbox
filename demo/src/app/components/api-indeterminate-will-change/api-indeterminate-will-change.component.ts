import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-api-indeterminate-will-change',
  templateUrl: './api-indeterminate-will-change.component.html',
  styleUrls: ['./api-indeterminate-will-change.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiIndeterminateWillChangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
