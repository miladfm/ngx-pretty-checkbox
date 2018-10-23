import { Component, OnInit } from '@angular/core';
import { PrettyCheckboxColor } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-demo-color',
  templateUrl: './demo-color.component.html',
  styleUrls: ['./demo-color.component.css']
})
export class DemoColorComponent implements OnInit {

  color: PrettyCheckboxColor;

  constructor() { }

  ngOnInit() {
  }

}
