import { Component, Input, ElementRef, Renderer2, AfterViewInit, ChangeDetectionStrategy, Attribute } from '@angular/core';
import { PrettyCheckboxColor } from '../../model/interfaces';

@Component({
  selector: 'ngx-p-indeterminate:not([will-change]), p-indeterminate:not([will-change])',
  templateUrl: 'ngx-pretty-Indeterminate.component.html',
  host: {
    class: `state p-is-indeterminate`
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxPrettyIndeterminateComponent implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Attribute('outline') private _outline = false,
    @Attribute('color')   private _color: PrettyCheckboxColor,
  ) { }

  ngAfterViewInit() {
    if (this._color) {
      this.renderer.addClass(this.el.nativeElement,
        `p-${this._color}${this._outline ? '-o' : ''}`
      );
    }
  }


}
