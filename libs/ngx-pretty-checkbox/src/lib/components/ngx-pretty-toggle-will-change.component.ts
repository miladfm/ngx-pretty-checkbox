import {
  Input,
  ElementRef,
  Component,
  SimpleChanges,
  OnChanges,
  Renderer2,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { PrettyCheckboxColor, PrettyCheckBoxToggleType } from '../model';
import { getColorClassName } from '../utils';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'ngx-p-toggle[will-change], p-toggle[will-change]',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'state',
    '[class.p-on]': 'isToggleOn',
    '[class.p-off]': 'isToggleOff',
  },
  template: `
    <ng-content select="[pIcon], [p-icon], [pSvg], [p-svg], [pImage], [p-image]"></ng-content>
    <label><ng-content></ng-content></label>
  `,
  styles: []
})
export class NgxPrettyToggleWillChangeComponent implements OnChanges {

  @Input() type: PrettyCheckBoxToggleType;

  get isToggleOn() { return this.type === PrettyCheckBoxToggleType.On; }
  get isToggleOff() { return this.type === PrettyCheckBoxToggleType.Off; }

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
