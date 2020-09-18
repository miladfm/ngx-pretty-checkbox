import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-api-toggle',
  templateUrl: './api-toggle.component.html',
  styleUrls: ['./api-toggle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApiToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
