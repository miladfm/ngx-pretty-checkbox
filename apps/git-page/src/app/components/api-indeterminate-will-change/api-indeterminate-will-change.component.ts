import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-api-indeterminate-will-change',
  templateUrl: './api-indeterminate-will-change.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiIndeterminateWillChangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
