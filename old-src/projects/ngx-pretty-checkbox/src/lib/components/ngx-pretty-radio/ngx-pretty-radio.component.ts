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
  Attribute,
  AfterViewInit,
  Renderer2,
  Optional,
  } from '@angular/core';

import {
  PrettyCheckboxAnimation,
  PrettyCheckboxColor,
  PrettyCheckboxShape,
  PrettyCheckboxStroke,
  PrettyRadioChange
  } from '../../model/interfaces';
import { strToBoolean } from '../../utility';
import { NgxPrettyIconDirective } from '../../directives/ngx-pretty-icon.directive';
import { NgxPrettyImageDirective } from '../../directives/ngx-pretty-image.directive';
import { NgxPrettyRadioGroupDirective } from '../../directives/ngx-pretty-radio-group.directive';
import { NgxPrettySvgDirective } from '../../directives/ngx-pretty-svg.directive';
import { NgxPrettyHoverWillChangeComponent } from '../ngx-pretty-hover-will-change/ngx-pretty-hover-will-change.component';
import { NgxPrettyHoverComponent } from '../ngx-pretty-hover/ngx-pretty-hover.component';
import { NgxPrettyToggleWillChangeComponent } from '../ngx-pretty-toggle-will-change/ngx-pretty-toggle-will-change.component';
import { NgxPrettyToggleComponent } from '../ngx-pretty-toggle/ngx-pretty-toggle.component';

@Component({
  selector: 'ngx-pretty-radio:not([will-change]), p-radio:not([will-change])',
  templateUrl: 'ngx-pretty-radio.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'pretty',
    '[class.p-locked]': 'lock'
  },
  exportAs: 'ngxPrettyRadio'
})
export class NgxPrettyRadioComponent implements AfterViewInit {

  @Input() checked = false;
  @Input() disabled = false;
  @Input() value: any;
  @Input() lock = false;


  @ViewChild('inputElem', { static: true }) private _inputElem: ElementRef;
  @ViewChild('stateElem', { static: false }) private _stateElem: ElementRef;

  @Output() change = new EventEmitter<PrettyRadioChange>();


  @ContentChild(NgxPrettyIconDirective, {static: false}) private _iconDir: NgxPrettyIconDirective;
  @ContentChild(NgxPrettySvgDirective, {static: false}) private _svgDir: NgxPrettySvgDirective;
  @ContentChild(NgxPrettyImageDirective, {static: false}) private _imgDir: NgxPrettyImageDirective;

  @ContentChild(NgxPrettyHoverComponent, {static: false}) private _hoverDir: NgxPrettyHoverComponent;
  @ContentChild(NgxPrettyHoverWillChangeComponent, {static: false}) private _hoverWillChangeDir: NgxPrettyHoverWillChangeComponent;

  @ContentChildren(NgxPrettyToggleComponent) public _toggleComps: QueryList<NgxPrettyToggleComponent>;
  @ContentChildren(NgxPrettyToggleWillChangeComponent) public _toggleWillChangeComps: QueryList<NgxPrettyToggleWillChangeComponent>;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Optional() private radioGroup: NgxPrettyRadioGroupDirective,

    @Attribute('stroke')      private _stroke: PrettyCheckboxStroke,
    @Attribute('shape')       private _shape: PrettyCheckboxShape,
    @Attribute('animation')   private _animation: PrettyCheckboxAnimation,
    @Attribute('isSwitch')    private _isSwitch = false,
    @Attribute('bigger')      private _bigger = false,
    @Attribute('enableFocus') private _enableFocus = false,
    @Attribute('plain')       private _plain = false,

    @Attribute('outline') private _outline = false,
    @Attribute('color')   private _color: PrettyCheckboxColor,
    @Attribute('name')   public _name: string,
    ) {
      if (!this._name && this.radioGroup) {
        this._name = this.radioGroup.name;
      }

      this._isSwitch    = strToBoolean(this._isSwitch);
      this._bigger      = strToBoolean(this._bigger);
      this._enableFocus = strToBoolean(this._enableFocus);
      this._plain       = strToBoolean(this._plain);
      this._outline     = strToBoolean(this._outline);
    }


  ngAfterViewInit(): void {
    const el = this.el.nativeElement;

    if (this._isSwitch)    { this.renderer.addClass(el, `p-switch`); }
    if (this._bigger)      { this.renderer.addClass(el, `p-bigger`); }
    if (this._enableFocus) { this.renderer.addClass(el, `p-has-focus`); }
    if (this._plain)       { this.renderer.addClass(el, `p-plain`); }

    if (this._stroke)     { this.renderer.addClass(el, `p-${this._stroke}`); }
    if (this._shape)      { this.renderer.addClass(el, `p-${this._shape}`); }
    if (this._animation)  { this.renderer.addClass(el, `p-${this._animation}`); }

    if (this._iconDir)          { this.renderer.addClass(el, `p-icon`); }
    if (this._svgDir)           { this.renderer.addClass(el, `p-svg`); }
    if (this._imgDir)           { this.renderer.addClass(el, `p-image`); }

    if (this._hoverDir || this._hoverWillChangeDir) {
      this.renderer.addClass(el, `p-has-hover`);
    }

    if (this._isToggle) { this.renderer.addClass(el, `p-toggle`); }

    if (!this._isSwitch && !this._iconDir && !this._svgDir && !this._imgDir) {
      this.renderer.addClass(el, `p-default`);
    }

    // STATE ELEM
    if (this._color && !this._isToggle) {
      this.renderer.addClass(this._stateElem.nativeElement,
        `p-${this._color}${this._outline ? '-o' : ''}`
      );
    }

  }


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

  public get _isToggle() { return this._toggleComps.length === 2 || this._toggleWillChangeComps.length === 2; }
}
