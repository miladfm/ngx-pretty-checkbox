import { Component, Input, ElementRef, Renderer2, AfterViewInit, ChangeDetectionStrategy, Attribute } from '@angular/core';
import { PrettyCheckboxColor } from '../../model/interfaces';
import { DEFAULT_OUTLINE_PREFIX, DEFAULT_PREFIX } from '../../model/params';

@Component({
  selector: 'ngx-p-hover:not([will-change]), p-hover:not([will-change])',
  templateUrl: 'ngx-pretty-hover.component.html',
  host: {
    class: `state ${DEFAULT_PREFIX}is-hover`
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxPrettyHoverComponent implements AfterViewInit {

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
