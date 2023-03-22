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
  Optional
  } from '@angular/core';

import {
  PrettyCheckboxAnimation,
  PrettyCheckBoxChange,
  PrettyCheckboxColor,
  PrettyCheckboxShape,
  PrettyCheckboxStroke,
  } from '../model';
import {CommonModule} from "@angular/common";
import {NgxPrettyHoverComponent} from "./ngx-pretty-hover.component";
import {NgxPrettyIconDirective} from "../directives/ngx-pretty-icon.directive";
import {NgxPrettyRadioGroupDirective} from "../directives/ngx-pretty-radio-group.directive";
import {NgxPrettyToggleWillChangeComponent} from "./ngx-pretty-toggle-will-change.component";
import {NgxPrettyImageDirective} from "../directives/ngx-pretty-image.directive";
import {NgxPrettySvgDirective} from "../directives/ngx-pretty-svg.directive";
import {NgxPrettyHoverWillChangeComponent} from "./ngx-pretty-hover-will-change.component";
import {NgxPrettyToggleComponent} from "./ngx-pretty-toggle.component";

@Component({
  selector: 'ngx-pretty-radio[will-change], p-radio[will-change]',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'pretty',
    '[class.p-switch]': 'isSwitch',
    '[class.p-locked]': 'lock',
    '[class.p-bigger]': 'bigger',
    '[class.p-has-focus]': 'enableFocus',
    '[class.p-plain]': 'plain',
    '[class.p-fill]': '_isFill',
    '[class.p-thick]': '_isSlim',
    '[class.p-slim]': '_isThick',
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
  },
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
         [ngClass]="[ color ? 'p-' + color + (outline ? '-o' : '') : '' ]">

      <ng-content select="[pIcon], [p-icon], [pSvg], [p-svg], [pImage], [p-image]"></ng-content>
      <label><ng-content></ng-content></label>
    </div>

    <ng-content select="ngx-p-indeterminate, p-indeterminate, ngx-p-hover, p-hover, ngx-p-toggle, p-toggle"></ng-content>
  `,
  styles: [],
  exportAs: 'ngxPrettyRadio'
})
export class NgxPrettyRadioWillChangeComponent {

  constructor(@Optional() private radioGroup: NgxPrettyRadioGroupDirective) {
    if (radioGroup) {
      this.radioGroupName = radioGroup.name;
    }
  }

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

  public radioGroupName: string;
  @Input() name: string;


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


