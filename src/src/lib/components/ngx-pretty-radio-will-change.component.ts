import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Optional
  } from '@angular/core';
import { DEFAULT_OUTLINE_PREFIX, DEFAULT_PREFIX, DEFAULT_PRETTY_CLASS_NAME } from '../model/params';
import { NgxPrettyHoverComponent } from './ngx-pretty-hover.component';
import { NgxPrettyIconDirective } from '../directives/ngx-pretty-icon.directive';
import { NgxPrettyImageDirective } from '../directives/ngx-pretty-image.directive';
import { NgxPrettySvgDirective } from '../directives/ngx-pretty-svg.directive';
import { NgxPrettyToggleComponent } from './ngx-pretty-toggle.component';
import {
  PrettyCheckboxAnimation,
  PrettyCheckBoxChange,
  PrettyCheckboxColor,
  PrettyCheckboxShape,
  PrettyCheckboxStroke,
  } from '../model/interfaces';
import { NgxPrettyHoverWillChangeComponent } from './ngx-pretty-hover-will-change.component';
import { NgxPrettyToggleWillChangeComponent } from './ngx-pretty-toggle-will-change.component';
import { NgxPrettyRadioGroupDirective } from './ngx-pretty-radio-group.component';
// tslint:disable:use-host-property-decorator



@Component({
  selector: 'ngx-pretty-radio[will-change], p-radio[will-change]',
  template: `
    <input
      #inputElem
      type="radio"
      [name]="name || radioGroupName"
      [value]="value"
      [checked]="checked"
      [disabled]="disabled"
      (change)="_onChange($event, inputElem.checked, inputElem.value)"/>

    <div *ngIf="!_isToggle" class="state"
        [ngClass]="[ color ? _prefix + color + (outline ? _outlinePrefix : '') : '' ]">

        <ng-content select="[pIcon], [p-icon], [pSvg], [p-svg], [pImage], [p-image]"></ng-content>
        <label><ng-content></ng-content></label>
    </div>

    <ng-content select="ngx-p-hover, p-hover, ngx-p-toggle, p-toggle"></ng-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': DEFAULT_PRETTY_CLASS_NAME
  },
  exportAs: 'ngxPrettyRadioWillChange'
})
export class NgxPrettyRadioWillChangeComponent {

  constructor(@Optional() private radioGroup: NgxPrettyRadioGroupDirective) {
    if (radioGroup) {
      this.radioGroupName = radioGroup.name;
    }
  }

  public readonly _prefix = DEFAULT_PREFIX;
  public readonly _outlinePrefix = DEFAULT_OUTLINE_PREFIX;

  @ViewChild('inputElem') private _inputElem: ElementRef;
  @Output() change = new EventEmitter<PrettyCheckBoxChange>();


  // ---------- INPUTS ----------
  @Input() stroke: PrettyCheckboxStroke;
  @Input() shape: PrettyCheckboxShape;
  @Input() animation: PrettyCheckboxAnimation;
  @Input() color: PrettyCheckboxColor;
  @Input() outline = false; // COLOR . Can be used as Solid ( p-primary ) or Outline ( p-primary-o ).

  @Input() checked = false;
  @Input() disabled = false;
  @Input() value;

  public radioGroupName: string;
  @Input() name: string;


  // ----- INPUTS AND BINDING ------
  // SWITCH
  @HostBinding(`class.${DEFAULT_PREFIX}switch`)
  @Input() isSwitch = false;

  //  LOCK
  @HostBinding(`class.${DEFAULT_PREFIX}locked`)
  @Input() lock = false;

  //  BIGGER
  @HostBinding(`class.${DEFAULT_PREFIX}bigger`)
  @Input() bigger = false;

  //  FOCUS
  @HostBinding(`class.${DEFAULT_PREFIX}has-focus`)
  @Input() enableFocus = false;

  //  PLAIN
  @HostBinding(`class.${DEFAULT_PREFIX}plain`)
  @Input() plain = false; // To remove the border ( when checkbox is checked )


  // ---------- STROKE ----------
  // Fill
  @HostBinding(`class.${DEFAULT_PREFIX}${PrettyCheckboxStroke.Fill}`)
  get _isFill() { return this.stroke === PrettyCheckboxStroke.Fill; }

  // Slim
  @HostBinding(`class.${DEFAULT_PREFIX}${PrettyCheckboxStroke.Slim}`)
  get _isSlim() { return this.stroke === PrettyCheckboxStroke.Slim; }

  // Thick
  @HostBinding(`class.${DEFAULT_PREFIX}${PrettyCheckboxStroke.Thick}`)
  get _isThick() { return this.stroke === PrettyCheckboxStroke.Thick; }


  // ---------- SHAPE ----------
  // Curve
  @HostBinding(`class.${DEFAULT_PREFIX}${PrettyCheckboxShape.Curve}`)
  get _isCurve() { return this.shape === PrettyCheckboxShape.Curve; }

  // Round
  @HostBinding(`class.${DEFAULT_PREFIX}${PrettyCheckboxShape.Round}`)
  get _isRound() { return this.shape === PrettyCheckboxShape.Round; }


  // ---------- ANIMATION ----------
  // Smooth
  @HostBinding(`class.${DEFAULT_PREFIX}${PrettyCheckboxAnimation.Smooth}`)
  get _isSmooth() { return this.animation === PrettyCheckboxAnimation.Smooth; }

  // Jelly
  @HostBinding(`class.${DEFAULT_PREFIX}${PrettyCheckboxAnimation.Jelly}`)
  get _isJelly() { return this.animation === PrettyCheckboxAnimation.Jelly; }

  // Tada
  @HostBinding(`class.${DEFAULT_PREFIX}${PrettyCheckboxAnimation.Tada}`)
  get _isTada() { return this.animation === PrettyCheckboxAnimation.Tada; }

  // Rotate
  @HostBinding(`class.${DEFAULT_PREFIX}${PrettyCheckboxAnimation.Rotate}`)
  get _isRotate() { return this.animation === PrettyCheckboxAnimation.Rotate; }

  // Pulse
  @HostBinding(`class.${DEFAULT_PREFIX}${PrettyCheckboxAnimation.Pulse}`)
  get _isPulse() { return this.animation === PrettyCheckboxAnimation.Pulse; }


  // ---------- BINDING ----------
  // Toggle
  @ContentChildren(NgxPrettyToggleComponent) _toggleComp: QueryList<NgxPrettyToggleComponent>;
  @ContentChildren(NgxPrettyToggleWillChangeComponent) _toggleWillChangeComp: QueryList<NgxPrettyToggleWillChangeComponent>;

  @HostBinding(`class.${DEFAULT_PREFIX}toggle`)
  get _isToggle() { return this._toggleComp.length === 2 || this._toggleWillChangeComp.length === 2; }

  // DEFAULT
  @HostBinding(`class.${DEFAULT_PREFIX}default`)
  get _isDefault() { return !this.isSwitch && !this._iconElem && !this._svgElem && !this._imageElem; }



  // ----- CHILD SELECTOR AND BINDING -----
  // ICON
  @HostBinding(`class.${DEFAULT_PREFIX}icon`)
  @ContentChild(NgxPrettyIconDirective) _iconElem: NgxPrettyIconDirective;

  // SVG
  @HostBinding(`class.${DEFAULT_PREFIX}svg`)
  @ContentChild(NgxPrettySvgDirective) _svgElem: NgxPrettySvgDirective;

  // IMAGE
  @HostBinding(`class.${DEFAULT_PREFIX}image`)
  @ContentChild(NgxPrettyImageDirective) _imageElem: NgxPrettyImageDirective;

  // HOVER
  @ContentChild(NgxPrettyHoverWillChangeComponent) _hoverWillChangeDir: NgxPrettyHoverWillChangeComponent;
  @ContentChild(NgxPrettyHoverComponent) _hoverComp: NgxPrettyHoverComponent;

  @HostBinding(`class.${DEFAULT_PREFIX}has-hover`)
  get _isHover() { return this._hoverComp || this._hoverWillChangeDir; }


  // ---------- METHODS ---------
  public _onChange(event: Event, checked: boolean, value: string) {
    // I stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    event.stopPropagation();
    this.change.emit({ value, checked, event });

    if (this.radioGroup) {
      this.radioGroup._emitChange({ value, checked, event });
    }
  }

}


