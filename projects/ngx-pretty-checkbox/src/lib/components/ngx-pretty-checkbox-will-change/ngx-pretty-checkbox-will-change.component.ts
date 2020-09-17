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
  ChangeDetectorRef
  } from '@angular/core';
import { DEFAULT_OUTLINE_PREFIX, DEFAULT_PREFIX, DEFAULT_PRETTY_CLASS_NAME } from '../../model/params';
import {
  PrettyCheckboxAnimation,
  PrettyCheckBoxChange,
  PrettyCheckboxColor,
  PrettyCheckboxShape,
  PrettyCheckboxStroke,
  } from '../../model/interfaces';
import { NgxPrettyToggleComponent } from '../ngx-pretty-toggle/ngx-pretty-toggle.component';
import { NgxPrettyToggleWillChangeComponent } from '../ngx-pretty-toggle-will-change/ngx-pretty-toggle-will-change.component';
import { NgxPrettyIconDirective } from '../../directives/ngx-pretty-icon.directive';
import { NgxPrettySvgDirective } from '../../directives/ngx-pretty-svg.directive';
import { NgxPrettyImageDirective } from '../../directives/ngx-pretty-image.directive';
import { NgxPrettyHoverWillChangeComponent } from '../ngx-pretty-hover-will-change/ngx-pretty-hover-will-change.component';
import { NgxPrettyHoverComponent } from '../ngx-pretty-hover/ngx-pretty-hover.component';
import { NgxPrettyIndeterminateComponent } from '../ngx-pretty-Indeterminate/ngx-pretty-Indeterminate.component';
import { NgxPrettyIndeterminateWillChangeComponent } from '../ngx-pretty-Indeterminate-will-change/ngx-pretty-Indeterminate-will-change.component';

@Component({
  selector: 'ngx-pretty-checkbox[will-change], p-checkbox[will-change]',
  templateUrl: './ngx-pretty-checkbox-will-change.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: DEFAULT_PRETTY_CLASS_NAME
  },
  exportAs: 'ngxPrettyCheckboxWillChange'
})
export class NgxPrettyCheckboxWillChangeComponent {

  constructor(private cd: ChangeDetectorRef) {}

  public readonly _prefix = DEFAULT_PREFIX;
  public readonly _outlinePrefix = DEFAULT_OUTLINE_PREFIX;

  @ViewChild('inputElem', { static: true }) private _inputElem: ElementRef;
  @Output() change = new EventEmitter<PrettyCheckBoxChange>();


  // ---------- INPUTS ----------
  @Input() stroke: PrettyCheckboxStroke;
  @Input() shape: PrettyCheckboxShape;
  @Input() animation: PrettyCheckboxAnimation;
  @Input() color: PrettyCheckboxColor;
  @Input() outline = false; // COLOR . Can be used as Solid ( p-primary ) or Outline ( p-primary-o ).

  @Input() checked = false;
  @Input() disabled = false;
  @Input() value: any;


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
  @ContentChild(NgxPrettyIconDirective, {static: false}) _iconElem: NgxPrettyIconDirective;

  // SVG
  @HostBinding(`class.${DEFAULT_PREFIX}svg`)
  @ContentChild(NgxPrettySvgDirective, {static: false}) _svgElem: NgxPrettySvgDirective;

  // IMAGE
  @HostBinding(`class.${DEFAULT_PREFIX}image`)
  @ContentChild(NgxPrettyImageDirective, {static: false}) _imageElem: NgxPrettyImageDirective;

  // HOVER
  @ContentChild(NgxPrettyHoverWillChangeComponent, {static: false}) _hoverWillChangeDir: NgxPrettyHoverWillChangeComponent;
  @ContentChild(NgxPrettyHoverComponent, {static: false}) _hoverComp: NgxPrettyHoverComponent;

  @HostBinding(`class.${DEFAULT_PREFIX}has-hover`)
  get _isHover() { return this._hoverComp || this._hoverWillChangeDir; }

  // Indeterminate
  @ContentChild(NgxPrettyIndeterminateComponent, {static: false}) _indeterminateComp: NgxPrettyIndeterminateComponent;
  @ContentChild(NgxPrettyIndeterminateWillChangeComponent, {static: false}) _indeterminateWillChangeComp: NgxPrettyIndeterminateWillChangeComponent;

  @HostBinding(`class.${DEFAULT_PREFIX}has-indeterminate`)
  get _isIndeterminate() { return this._indeterminateComp || this._indeterminateWillChangeComp; }


  // ---------- PRIVATE METHODS ---------
  public _onChange(event: Event, checked: boolean, value: string) {
    // I stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up
    event.stopPropagation();
    this.checked = checked;
    this.change.emit({ value, checked, event });
  }

  // ---------- PUBLIC METHODS ---------
  public setIndeterminate(value = true) {
    this._inputElem.nativeElement.indeterminate = value;
  }

  public forceCheck(check: boolean) {
    this.checked = check;
    this.cd.markForCheck();
  }
}


