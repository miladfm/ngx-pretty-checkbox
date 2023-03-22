// tslint:disable:use-host-property-decorator

import { Input, ElementRef, Component, AfterViewInit, Renderer2, ChangeDetectionStrategy, Attribute } from '@angular/core';
import { PrettyCheckboxColor, PrettyCheckBoxToggleType } from '../../model/interfaces';

@Component({
  selector: 'ngx-p-toggle:not([will-change]), p-toggle:not([will-change])',
  templateUrl: './ngx-pretty-toggle.component.html',
  host: {
    class: 'state'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxPrettyToggleComponent implements AfterViewInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Attribute('outline') private _outline = false,
    @Attribute('color')   private _color: PrettyCheckboxColor,
    @Attribute('type')   private _type: PrettyCheckBoxToggleType,
  ) { }

  ngAfterViewInit() {
    if (this._color) {
      this.renderer.addClass(this.el.nativeElement,
        `p-${this._color}${this._outline ? '-o' : ''}`
      );
    }

    this.renderer.addClass(this.el.nativeElement, `p-${this._type}`);
  }

}
