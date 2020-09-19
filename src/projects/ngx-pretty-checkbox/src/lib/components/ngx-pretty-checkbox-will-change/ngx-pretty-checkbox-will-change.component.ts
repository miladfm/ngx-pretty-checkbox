import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ChangeDetectorRef
  } from '@angular/core';
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
    'class': 'pretty',
    '[class.p-switch]': 'isSwitch',
    '[class.p-locked]': 'lock',
    '[class.p-bigger]': 'bigger',
    '[class.p-has-focus]': 'enableFocus',
    '[class.p-plain]': 'plain',
    '[class.p-fill]': '_isFill',
    '[class.p-slim]': '_isSlim',
    '[class.p-thick]': '_isThick',
    '[class.p-curve]': '_isCurve',
    '[class.p-round]': '_isRound',
    '[class.p-smooth]': '_isSmooth',
    '[class.p-jelly]': '_isJelly',
    '[class.p-tada]': '_isTada',
    '[class.p-rotate]': '_isRotate',
    '[class.p-pulse]': '_isPulse',
    '[class.p-toggle]': '_isToggle',
    '[class.p-default]': '_isDefault',
    '[class.p-icon]': '_iconElem',
    '[class.p-svg]': '_svgElem',
    '[class.p-image]': '_imageElem',
    '[class.p-has-hover]': '_isHover',
    '[class.p-has-indeterminate]': '_isIndeterminate',
  },
  exportAs: 'ngxPrettyCheckboxWillChange'
})
export class NgxPrettyCheckboxWillChangeComponent {

  constructor(private cd: ChangeDetectorRef) {}

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
  @Input() isSwitch = false;
  @Input() lock = false;
  @Input() bigger = false;
  @Input() enableFocus = false;
  @Input() plain = false; // To remove the border ( when checkbox is checked )


  // ---------- STROKE ----------
  get _isFill() { return this.stroke === PrettyCheckboxStroke.Fill; }
  get _isSlim() { return this.stroke === PrettyCheckboxStroke.Slim; }
  get _isThick() { return this.stroke === PrettyCheckboxStroke.Thick; }

  // ---------- SHAPE ----------
  get _isCurve() { return this.shape === PrettyCheckboxShape.Curve; }
  get _isRound() { return this.shape === PrettyCheckboxShape.Round; }

  // ---------- ANIMATION ----------
  get _isSmooth() { return this.animation === PrettyCheckboxAnimation.Smooth; }
  get _isJelly() { return this.animation === PrettyCheckboxAnimation.Jelly; }
  get _isTada() { return this.animation === PrettyCheckboxAnimation.Tada; }
  get _isRotate() { return this.animation === PrettyCheckboxAnimation.Rotate; }
  get _isPulse() { return this.animation === PrettyCheckboxAnimation.Pulse; }

  // ---------- BINDING ----------
  // Toggle
  @ContentChildren(NgxPrettyToggleComponent) _toggleComp: QueryList<NgxPrettyToggleComponent>;
  @ContentChildren(NgxPrettyToggleWillChangeComponent) _toggleWillChangeComp: QueryList<NgxPrettyToggleWillChangeComponent>;
  get _isToggle() { return this._toggleComp.length === 2 || this._toggleWillChangeComp.length === 2; }

  // DEFAULT
  get _isDefault() { return !this.isSwitch && !this._iconElem && !this._svgElem && !this._imageElem; }



  // ----- CHILD SELECTOR AND BINDING -----
  // ICON
  @ContentChild(NgxPrettyIconDirective, {static: false}) _iconElem: NgxPrettyIconDirective;

  // SVG
  @ContentChild(NgxPrettySvgDirective, {static: false}) _svgElem: NgxPrettySvgDirective;

  // IMAGE
  @ContentChild(NgxPrettyImageDirective, {static: false}) _imageElem: NgxPrettyImageDirective;

  // HOVER
  @ContentChild(NgxPrettyHoverWillChangeComponent, {static: false}) _hoverWillChangeDir: NgxPrettyHoverWillChangeComponent;
  @ContentChild(NgxPrettyHoverComponent, {static: false}) _hoverComp: NgxPrettyHoverComponent;
  get _isHover() { return this._hoverComp || this._hoverWillChangeDir; }

  // Indeterminate
  @ContentChild(NgxPrettyIndeterminateComponent, {static: false}) _indeterminateComp: NgxPrettyIndeterminateComponent;
  @ContentChild(NgxPrettyIndeterminateWillChangeComponent, {static: false}) _indeterminateWillChangeComp: NgxPrettyIndeterminateWillChangeComponent;
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


