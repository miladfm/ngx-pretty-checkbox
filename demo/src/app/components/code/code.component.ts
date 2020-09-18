import { Component, AfterViewInit, Input, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeComponent implements AfterViewInit {

  @Input() type = 'html';

  constructor() { }

  ngAfterViewInit() {

  }

}
