import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-api-toggle-will-change',
  templateUrl: './api-toggle-will-change.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiToggleWillChangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
