import {
  ElementRef,
  Component,
  AfterViewInit,
  Renderer2,
  ChangeDetectionStrategy,
  Attribute,
  ViewEncapsulation
} from '@angular/core';
import { PrettyCheckboxColor, PrettyCheckBoxToggleType } from '../model';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'ngx-p-toggle:not([will-change]), p-toggle:not([will-change])',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'state'
  },
  template: `
    <ng-content select="[pIcon], [p-icon], [pSvg], [p-svg], [pImage], [p-image]"></ng-content>
    <label><ng-content></ng-content></label>
  `,
  styles: []
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
