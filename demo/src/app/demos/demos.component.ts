import { Component, OnInit } from '@angular/core';
import { PrettyCheckBoxChange } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onChange(event: PrettyCheckBoxChange) {
    console.log('event', event);
  }
}
