import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-api-checkbox-will-change',
  templateUrl: './api-checkbox-will-change.component.html',
  styleUrls: ['./api-checkbox-will-change.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiCheckboxWillChangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
