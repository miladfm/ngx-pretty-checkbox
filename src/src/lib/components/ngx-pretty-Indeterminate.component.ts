// tslint:disable:use-host-property-decorator

import { Component, Input, ElementRef, Renderer2, AfterViewInit, ChangeDetectionStrategy, Attribute } from '@angular/core';
import { DEFAULT_PREFIX, DEFAULT_OUTLINE_PREFIX } from '../model/params';
import { PrettyCheckboxColor } from '../model/interfaces';

@Component({
  selector: 'ngx-p-indeterminate:not([will-change]), p-indeterminate:not([will-change])',
  template: `
    <ng-content select="[pIcon], [p-icon], [pSvg], [p-svg], [pImage], [p-image]"></ng-content>
    <label><ng-content></ng-content></label>
  `,
  host: {
    class: `state ${DEFAULT_PREFIX}is-indeterminate`
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxPrettyIndeterminateComponent implements AfterViewInit {

  @Input() color: PrettyCheckboxColor;
  @Input() outline = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Attribute('outline') private _outline = false,
    @Attribute('color')   private _color: PrettyCheckboxColor,
  ) { }

  ngAfterViewInit() {
    if (this._color) {
      this.renderer.addClass(this.el.nativeElement,
        `${DEFAULT_PREFIX}${this._color}${this._outline ? DEFAULT_OUTLINE_PREFIX : ''}`
      );
    }
  }


}
