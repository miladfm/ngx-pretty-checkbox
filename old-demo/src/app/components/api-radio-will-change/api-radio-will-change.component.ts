import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-api-radio-will-change',
  templateUrl: './api-radio-will-change.component.html',
  styleUrls: ['./api-radio-will-change.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioWillChangeApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
