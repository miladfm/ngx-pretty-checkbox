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
  Attribute,
  AfterViewInit,
  Renderer2
  } from '@angular/core';
import { DEFAULT_OUTLINE_PREFIX, DEFAULT_PREFIX, DEFAULT_PRETTY_CLASS_NAME } from '../model/params';
import { NgxPrettyHoverComponent } from './ngx-pretty-hover.component';
import { NgxPrettyIconDirective } from '../directives/ngx-pretty-icon.directive';
import { NgxPrettyImageDirective } from '../directives/ngx-pretty-image.directive';
import { NgxPrettyIndeterminateComponent } from './ngx-pretty-Indeterminate.component';
import { NgxPrettySvgDirective } from '../directives/ngx-pretty-svg.directive';
import { NgxPrettyToggleComponent } from './ngx-pretty-toggle.component';
import {
  PrettyCheckboxAnimation,
  PrettyCheckBoxChange,
  PrettyCheckboxColor,
  PrettyCheckboxShape,
  PrettyCheckboxStroke
  } from '../model/interfaces';
import { NgxPrettyHoverWillChangeComponent } from './ngx-pretty-hover-will-change.component';
import { NgxPrettyIndeterminateWillChangeComponent } from './ngx-pretty-Indeterminate-will-change.component';
import { NgxPrettyToggleWillChangeComponent } from './ngx-pretty-toggle-will-change.component';
import { strToBoolean } from '../utility';
// tslint:disable:use-host-property-decorator



@Component({
  selector: 'ngx-pretty-checkbox:not([will-change]), p-checkbox:not([will-change])',
  template: `
    <input
      #inputElem
      type="checkbox"
      [value]="value"
      [checked]="checked"
      [disabled]="disabled"
      (change)="_onChange($event, inputElem.checked, inputElem.value)"/>

    <div #stateElem *ngIf="!_isToggle" class="state">

      <ng-content select="[pIcon], [p-icon], [pSvg], [p-svg], [pImage], [p-image]"></ng-content>
      <label><ng-content></ng-content></label>

    </div>

    <ng-content select="ngx-p-indeterminate, p-indeterminate, ngx-p-hover, p-hover, ngx-p-toggle, p-toggle"></ng-content>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': DEFAULT_PRETTY_CLASS_NAME
  },
  exportAs: 'ngxPrettyCheckbox'
})
export class NgxPrettyCheckboxComponent implements AfterViewInit {

  public readonly _prefix = DEFAULT_PREFIX;
  public readonly _outlinePrefix = DEFAULT_OUTLINE_PREFIX;


  @Input() checked = false;
  @Input() disabled = false;
  @Input() value;


  @HostBinding(`class.${DEFAULT_PREFIX}locked`)
  @Input() lock = false;


  @ViewChild('inputElem') private _inputElem: ElementRef;
  @ViewChild('stateElem') private _stateElem: ElementRef;

  @Output() change = new EventEmitter<PrettyCheckBoxChange>();


  @ContentChild(NgxPrettyIconDirective) private _iconDir: NgxPrettyIconDirective;
  @ContentChild(NgxPrettySvgDirective) private _svgDir: NgxPrettySvgDirective;
  @ContentChild(NgxPrettyImageDirective) private _imgDir: NgxPrettyImageDirective;

  @ContentChild(NgxPrettyHoverComponent) private _hoverDir: NgxPrettyHoverComponent;
  @ContentChild(NgxPrettyHoverWillChangeComponent) private _hoverWillChangeDir: NgxPrettyHoverWillChangeComponent;

  @ContentChild(NgxPrettyIndeterminateComponent) private _indeterminateDir: NgxPrettyIndeterminateComponent;
  @ContentChild(NgxPrettyIndeterminateWillChangeComponent) private _indeterminateWillChangeDir: NgxPrettyIndeterminateWillChangeComponent;

  @ContentChildren(NgxPrettyToggleComponent) public _toggleComps: QueryList<NgxPrettyToggleComponent>;
  @ContentChildren(NgxPrettyToggleWillChangeComponent) public _toggleWillChangeComps: QueryList<NgxPrettyToggleWillChangeComponent>;

  constructor (
    private renderer: Renderer2,
    private el: ElementRef,

    @Attribute('stroke')      private _stroke: PrettyCheckboxStroke,
    @Attribute('shape')       private _shape: PrettyCheckboxShape,
    @Attribute('animation')   private _animation: PrettyCheckboxAnimation,
    @Attribute('isSwitch')    private _isSwitch = false,
    @Attribute('bigger')      private _bigger = false,
    @Attribute('enableFocus') private _enableFocus = false,
    @Attribute('plain')       private _plain = false,

    @Attribute('outline') private _outline = false,
    @Attribute('color')   private _color: PrettyCheckboxColor,
  ) {
      this._isSwitch    = strToBoolean(this._isSwitch);
      this._bigger      = strToBoolean(this._bigger);
      this._enableFocus = strToBoolean(this._enableFocus);
      this._plain       = strToBoolean(this._plain);
      this._outline     = strToBoolean(this._outline);
  }

  ngAfterViewInit(): void {
    const el = this.el.nativeElement;

    if (this._isSwitch)    { this.renderer.addClass(el, `${DEFAULT_PREFIX}switch`); }
    if (this._bigger)      { this.renderer.addClass(el, `${DEFAULT_PREFIX}bigger`); }
    if (this._enableFocus) { this.renderer.addClass(el, `${DEFAULT_PREFIX}has-focus`); }
    if (this._plain)       { this.renderer.addClass(el, `${DEFAULT_PREFIX}plain`); }

    if (this._stroke)     { this.renderer.addClass(el, `${DEFAULT_PREFIX}${this._stroke}`); }
    if (this._shape)      { this.renderer.addClass(el, `${DEFAULT_PREFIX}${this._shape}`); }
    if (this._animation)  { this.renderer.addClass(el, `${DEFAULT_PREFIX}${this._animation}`); }

    if (this._iconDir)          { this.renderer.addClass(el, `${DEFAULT_PREFIX}icon`); }
    if (this._svgDir)           { this.renderer.addClass(el, `${DEFAULT_PREFIX}svg`); }
    if (this._imgDir)           { this.renderer.addClass(el, `${DEFAULT_PREFIX}image`); }

    if (this._hoverDir || this._hoverWillChangeDir) {
      this.renderer.addClass(el, `${DEFAULT_PREFIX}has-hover`);
    }

    if (this._indeterminateDir || this._indeterminateWillChangeDir) {
      this.renderer.addClass(el, `${DEFAULT_PREFIX}has-indeterminate`);
    }

    if (this._isToggle) { this.renderer.addClass(el, `${DEFAULT_PREFIX}toggle`); }

    if (!this._isSwitch && !this._iconDir && !this._svgDir && !this._imgDir) {
      this.renderer.addClass(el, `${DEFAULT_PREFIX}default`);
    }

    // STATE ELEM
    if (this._color && !this._isToggle) {
      this.renderer.addClass(this._stateElem.nativeElement,
        `${DEFAULT_PREFIX}${this._color}${this._outline ? DEFAULT_OUTLINE_PREFIX : ''}`
      );
    }

  }


  // ---------- METHODS ---------
  public _onChange(event: Event, checked: boolean, value: string) {
    // I stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    event.stopPropagation();
    this.change.emit({ value, checked, event });
  }

  public setIndeterminate(value = true) {
    this._inputElem.nativeElement.indeterminate = value;
  }

  public get _isToggle() { return this._toggleComps.length === 2 || this._toggleWillChangeComps.length === 2; }
}
