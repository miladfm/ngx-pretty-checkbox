import { Input, ElementRef, Component, HostBinding, SimpleChanges, OnChanges, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckboxColor, PrettyCheckBoxToggleType } from '../../model/interfaces';
import { getColorClassName } from '../../utility';

@Component({
  selector: 'ngx-p-toggle[will-change], p-toggle[will-change]',
  templateUrl: 'ngx-pretty-toggle-will-change.component.html',
  host: {
    'class': 'state',
    '[class.p-on]': 'isToggleOn',
    '[class.p-off]': 'isToggleOff',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
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
