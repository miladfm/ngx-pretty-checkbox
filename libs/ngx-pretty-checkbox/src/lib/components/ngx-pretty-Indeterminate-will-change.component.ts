import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  SimpleChanges,
  OnChanges,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { getColorClassName } from '../utils';
import { PrettyCheckboxColor } from '../model';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'ngx-p-indeterminate[will-change], p-indeterminate[will-change]',
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
export class NgxPrettyIndeterminateWillChangeComponent implements OnChanges {

  @Input() color: PrettyCheckboxColor;
  @Input() outline = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.color || changes.outline) {

      const oldClass =
        getColorClassName(
          changes.color ? changes.color.previousValue : this.color,
          changes.outline ? changes.outline.previousValue : null
        );

      const newClass =
        getColorClassName(
          changes.color ? changes.color.currentValue : this.color,
          changes.outline ? changes.outline.currentValue : null
        );

      this.renderer.removeClass(this.el.nativeElement, oldClass);
      this.renderer.addClass(this.el.nativeElement, newClass);
    }
  }

}
