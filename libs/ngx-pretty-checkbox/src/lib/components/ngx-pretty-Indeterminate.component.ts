import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  AfterViewInit,
  ChangeDetectionStrategy,
  Attribute,
  ViewEncapsulation
} from '@angular/core';
import { PrettyCheckboxColor } from '../model';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'ngx-p-indeterminate:not([will-change]), p-indeterminate:not([will-change])',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: `state p-is-indeterminate`
  },
  template: `
    <ng-content select="[pIcon], [p-icon], [pSvg], [p-svg], [pImage], [p-image]"></ng-content>
    <label><ng-content></ng-content></label>
  `,
  styles: []
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
