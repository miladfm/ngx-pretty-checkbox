import { Component, Input, ElementRef, Renderer2, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckboxColor } from '../../model/interfaces';
import { getColorClassName } from '../../utility';


@Component({
  selector: 'ngx-p-hover[will-change], p-hover[will-change]',
  templateUrl: './ngx-pretty-hover-will-change.component.html',
  host: {
    class: `state p-is-hover`
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxPrettyHoverWillChangeComponent implements OnChanges {

  @Input() color: PrettyCheckboxColor;
  @Input() outline = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

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
