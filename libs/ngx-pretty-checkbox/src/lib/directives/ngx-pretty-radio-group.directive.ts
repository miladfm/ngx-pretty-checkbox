import { Directive, Output, EventEmitter } from '@angular/core';
import { PrettyRadioChange } from '../model';

let nextId = 1;

@Directive({
  selector: 'ngx-pretty-radio-group, p-radio-group',
  standalone: true,
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
