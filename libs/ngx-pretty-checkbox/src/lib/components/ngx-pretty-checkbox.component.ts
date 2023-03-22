import {
  Attribute, ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild, ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList, Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrettyCheckboxAnimation, PrettyCheckBoxChange, PrettyCheckboxColor, PrettyCheckboxShape, PrettyCheckboxStroke} from '../model';
import {strToBoolean} from "../utils";
import {NgxPrettyIconDirective} from "../directives/ngx-pretty-icon.directive";
import { NgxPrettyHoverComponent } from './ngx-pretty-hover.component';
import { NgxPrettyHoverWillChangeComponent } from './ngx-pretty-hover-will-change.component';
import { NgxPrettyIndeterminateComponent } from './ngx-pretty-Indeterminate.component';
import { NgxPrettyIndeterminateWillChangeComponent } from './ngx-pretty-Indeterminate-will-change.component';
import { NgxPrettyToggleComponent } from './ngx-pretty-toggle.component';
import { NgxPrettyToggleWillChangeComponent } from './ngx-pretty-toggle-will-change.component';
import {NgxPrettySvgDirective} from "../directives/ngx-pretty-svg.directive";
import { NgxPrettyImageDirective } from '../directives/ngx-pretty-image.directive';

@Component({
  selector: 'ngx-pretty-checkbox:not([will-change]), p-checkbox:not([will-change])',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'pretty',
    '[class.p-locked]': 'lock'
  },
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
  styles: [],
  exportAs: 'ngxPrettyCheckbox',
})
export class NgxPrettyCheckboxComponent {

  @Input() checked = false;
  @Input() disabled = false;
  @Input() value: any;
  @Input() lock = false;

  @ViewChild('inputElem', { static: true }) private _inputElem: ElementRef;
  @ViewChild('stateElem', { static: false }) private _stateElem: ElementRef;

  @Output() change = new EventEmitter<PrettyCheckBoxChange>();

  @ContentChild(NgxPrettyIconDirective, {static: false}) private _iconDir: NgxPrettyIconDirective;
  @ContentChild(NgxPrettySvgDirective, {static: false}) private _svgDir: NgxPrettySvgDirective;
  @ContentChild(NgxPrettyImageDirective, {static: false}) private _imgDir: NgxPrettyImageDirective;

  @ContentChild(NgxPrettyHoverComponent, {static: false}) private _hoverDir: NgxPrettyHoverComponent;
  @ContentChild(NgxPrettyHoverWillChangeComponent, {static: false}) private _hoverWillChangeDir: NgxPrettyHoverWillChangeComponent;

  @ContentChild(NgxPrettyIndeterminateComponent, {static: false}) private _indeterminateDir: NgxPrettyIndeterminateComponent;
  @ContentChild(NgxPrettyIndeterminateWillChangeComponent, {static: false}) private _indeterminateWillChangeDir: NgxPrettyIndeterminateWillChangeComponent;

  @ContentChildren(NgxPrettyToggleComponent) public _toggleComps: QueryList<NgxPrettyToggleComponent>;
  @ContentChildren(NgxPrettyToggleWillChangeComponent) public _toggleWillChangeComps: QueryList<NgxPrettyToggleWillChangeComponent>;

  public get _isToggle() { return this._toggleComps.length === 2 || this._toggleWillChangeComps.length === 2; }

  constructor(
      private renderer: Renderer2,
      private el: ElementRef,
      private cd: ChangeDetectorRef,

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

    if (this._isSwitch)    { this.renderer.addClass(el, `p-switch`); }
    if (this._bigger)      { this.renderer.addClass(el, `p-bigger`); }
    if (this._enableFocus) { this.renderer.addClass(el, `p-has-focus`); }
    if (this._plain)       { this.renderer.addClass(el, `p-plain`); }

    if (this._stroke)     { this.renderer.addClass(el, `p-${this._stroke}`); }
    if (this._shape)      { this.renderer.addClass(el, `p-${this._shape}`); }
    if (this._animation)  { this.renderer.addClass(el, `p-${this._animation}`); }

    if (this._iconDir)    { this.renderer.addClass(el, `p-icon`); }
    if (this._svgDir)     { this.renderer.addClass(el, `p-svg`); }
    if (this._imgDir)     { this.renderer.addClass(el, `p-image`); }

    if (this._hoverDir || this._hoverWillChangeDir) {
      this.renderer.addClass(el, `p-has-hover`);
    }

    if (this._indeterminateDir || this._indeterminateWillChangeDir) {
      this.renderer.addClass(el, `p-has-indeterminate`);
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


  // ---------- PRIVATE METHODS ---------
  public _onChange(event: Event, checked: boolean, value: string) {
    // Stop propagation on the change event. Otherwise, the change event, from the input element, will bubble up
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
