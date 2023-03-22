import { Directive, Output, EventEmitter } from '@angular/core';
// import { NgxPrettyRadioService } from '../ngx-pretty-checkbox.service';
// import { GROUP_NAME } from '../model/params';
import { PrettyRadioChange } from '../model/interfaces';

let nextId = 1;

@Directive({
  selector: 'ngx-pretty-radio-group, p-radio-group',
  // providers: [NgxPrettyRadioService],
  exportAs: 'ngxRadioGroup'
})
export class NgxPrettyRadioGroupDirective {

  public name = 'p-radio' + nextId++;

  @Output() change = new EventEmitter<PrettyRadioChange>();

  constructor() {}

  public _emitChange(event: PrettyRadioChange) {
    this.change.emit(event);
  }

}
