import { Component, Input, ElementRef, Renderer2, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { getColorClassName } from '../../utility';
import { PrettyCheckboxColor } from '../../model/interfaces';

@Component({
  selector: 'ngx-p-indeterminate[will-change], p-indeterminate[will-change]',
  templateUrl: 'ngx-pretty-Indeterminate-will-change.component.html',
  host: {
    class: `state p-is-indeterminate`
  },
  changeDetection: ChangeDetectionStrategy.OnPush
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
