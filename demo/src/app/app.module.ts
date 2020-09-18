import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { CodeComponent } from './components/code/code.component';
import { NgModule } from '@angular/core';
import { DemoCheckboxAnimationComponent } from './components/demo-checkbox-animation/demo-checkbox-animation.component';
import { DemoCheckboxBasicComponent } from './components/demo-checkbox-basic/demo-checkbox-basic.component';
import { DemoCheckboxColorComponent } from './components/demo-checkbox-color/demo-checkbox-color.component';
import { DemoCheckboxFontIconComponent } from './components/demo-checkbox-font-icon/demo-checkbox-font-icon.component';
import { DemoCheckboxImageComponent } from './components/demo-checkbox-image/demo-checkbox-image.component';
import { DemosCheckboxComponent } from './components/demos-checkbox/demos-checkbox.component';
import { DemoCheckboxSvgComponent } from './components/demo-checkbox-svg/demo-checkbox-svg.component';
import { DemoCheckboxSwitchComponent } from './components/demo-checkbox-switch/demo-checkbox-switch.component';
import { FormsModule } from '@angular/forms';
import { HighlightJsModule } from 'ngx-highlight-js';
import { MixedCheckboxColorComponent } from './components/demo-checkbox-mixed-color/demo-checkbox-mixed-color.component';
import { MixedCheckboxCurveComponent } from './components/demo-checkbox-mixed-curve/demo-checkbox-mixed-curve.component';
import { MixedCheckboxCurveFillComponent } from './components/demo-checkbox-mixed-curve-fill/demo-checkbox-mixed-curve-fill.component';
import { MixedCheckboxCurveFillOutlineComponent } from './components/demo-checkbox-mixed-curve-fill-outline/demo-checkbox-mixed-curve-fill-outline.component';
import { MixedCheckboxCurveOutlineComponent } from './components/demo-checkbox-mixed-curve-outline/demo-checkbox-mixed-curve-outline.component';
import { MixedCheckboxCurveThickComponent } from './components/demo-checkbox-mixed-curve-thick/demo-checkbox-mixed-curve-thick.component';
import { MixedCheckboxCurveThickOutlineComponent } from './components/demo-checkbox-mixed-curve-thick-outline/demo-checkbox-mixed-curve-thick-outline.component';
import { MixedCheckboxOutlineComponent } from './components/demo-checkbox-mixed-outline/demo-checkbox-mixed-outline.component';
import { MixedCheckboxRoundComponent } from './components/demo-checkbox-mixed-round/demo-checkbox-mixed-round.component';
import { MixedCheckboxRoundFillComponent } from './components/demo-checkbox-mixed-round-fill/demo-checkbox-mixed-round-fill.component';
import { MixedCheckboxRoundFillOutlineComponent } from './components/demo-checkbox-mixed-round-fill-outline/demo-checkbox-mixed-round-fill-outline.component';
import { MixedCheckboxRoundOutlineComponent } from './components/demo-checkbox-mixed-round-outline/demo-checkbox-mixed-round-outline.component';
import { MixedCheckboxRoundThickComponent } from './components/demo-checkbox-mixed-round-thick/demo-checkbox-mixed-round-thick.component';
import { MixedCheckboxRoundThickOutlineComponent } from './components/demo-checkbox-mixed-round-thick-outline/demo-checkbox-mixed-round-thick-outline.component';
import { MixedCheckboxSquareFillComponent } from './components/demo-checkbox-mixed-square-fill/demo-checkbox-mixed-square-fill.component';
import { MixedCheckboxSquareFillOutlineComponent } from './components/demo-checkbox-mixed-square-fill-outline/demo-checkbox-mixed-square-fill-outline.component';
import { MixedCheckboxSquareThickComponent } from './components/demo-checkbox-mixed-square-thick/demo-checkbox-mixed-square-thick.component';
import { MixedCheckboxSquareThickOutlineComponent } from './components/demo-checkbox-mixed-square-thick-outline/demo-checkbox-mixed-square-thick-outline.component';
import { MixedCheckboxSwitchComponent } from './components/demo-checkbox-mixed-switch/demo-checkbox-mixed-switch.component';
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';
import { RouterModule } from '@angular/router';
import { routes } from 'src/routes';
import { DemoCheckboxToggleComponent } from './components/demo-checkbox-toggle/demo-checkbox-toggle.component';
import { ApiCheckboxComponent } from './components/api-checkbox/api-checkbox.component';
import { ApiInterfacesComponent } from './components/api-interfaces/api-interfaces.component';
import { ApiEnumsComponent } from './components/api-enums/api-enums.component';
import { ApiCheckboxWillChangeComponent } from './components/api-checkbox-will-change/api-checkbox-will-change.component';
import { ApiRadioGroupComponent } from './components/api-radio-group/api-radio-group.component';
import { ApiRadioComponent } from './components/api-radio/api-radio.component';
import { RadioWillChangeApiComponent } from './components/api-radio-will-change/api-radio-will-change.component';
import { ApiToggleComponent } from './components/api-toggle/api-toggle.component';
import { ApiToggleWillChangeComponent } from './components/api-toggle-will-change/api-toggle-will-change.component';
import { ApiHoverComponent } from './components/api-hover/api-hover.component';
import { ApiHoverWillChangeComponent } from './components/api-hover-will-change/api-hover-will-change.component';
import { ApiIndeterminateComponent } from './components/api-indeterminate/api-indeterminate.component';
import { ApiIndeterminateWillChangeComponent } from './components/api-indeterminate-will-change/api-indeterminate-will-change.component';
import { ApiIconComponent } from './components/api-icon/api-icon.component';
import { ApiSvgComponent } from './components/api-svg/api-svg.component';
import { ApiImageComponent } from './components/api-image/api-image.component';
import { ContentSetIndeterminateComponent } from './components/content-set-indeterminate/content-set-indeterminate.component';
import { InstallLibComponent } from './components/install-lib/install-lib.component';
import { InstallScssCustomizeComponent } from './components/install-scss-customize/install-scss-customize.component';
import { DemoCheckboxScalabilityComponent } from './components/demo-checkbox-scalability/demo-checkbox-scalability.component';
import { DemoCheckboxStatesComponent } from './components/demo-checkbox-states/demo-checkbox-states.component';
import { DemoCheckboxAllComponent } from './components/demo-checkbox-all/demo-checkbox-all.component';
import { DemoCheckboxPlainComponent } from './components/demo-checkbox-plain/demo-checkbox-plain.component';
import { DemoCheckboxDisableComponent } from './components/demo-checkbox-disable/demo-checkbox-disable.component';
import { DemoCheckboxLockComponent } from './components/demo-checkbox-lock/demo-checkbox-lock.component';
import { DemoCheckboxSizeComponent } from './components/demo-checkbox-size/demo-checkbox-size.component';
import { DemoCheckboxAnimationSmoothComponent } from './components/demo-checkbox-animation-smooth/demo-checkbox-animation-smooth.component';
import { DemoCheckboxAnimationJellyComponent } from './components/demo-checkbox-animation-jelly/demo-checkbox-animation-jelly.component';
import { DemoCheckboxAnimationTadaComponent } from './components/demo-checkbox-animation-tada/demo-checkbox-animation-tada.component';
import { DemoCheckboxAnimationRotateComponent } from './components/demo-checkbox-animation-rotate/demo-checkbox-animation-rotate.component';
import { DemoAnimationCheckboxPulseComponent } from './components/demo-checkbox-animation-pulse/demo-checkbox-animation-pulse.component';
import { DemoRadioButtonComponent } from './components/demo-radio-button/demo-radio-button.component';
import { DemoRadioButtonColorComponent } from './components/demo-radio-button-color/demo-radio-button-color.component';
import { DemoRadioButtonColorIconComponent } from './components/demo-radio-button-color-icon/demo-radio-button-color-icon.component';
import { DemoRadioButtonColorOutlineIconComponent } from './components/demo-radio-button-color-outline-icon/demo-radio-button-color-outline-icon.component';
import { DemoRadioButtonAnimationComponent } from './components/demo-radio-button-animation/demo-radio-button-animation.component';
import { DemoRadioButtonPlainComponent } from './components/demo-radio-button-plain/demo-radio-button-plain.component';
import { DemoRadioButtonSwitchComponent } from './components/demo-radio-button-switch/demo-radio-button-switch.component';
import { DemoRadioButtonAllComponent } from './components/demo-radio-button-all/demo-radio-button-all.component';
import { DemosRadioButtonComponent } from './components/demos-radio-button/demos-radio-button.component';




@NgModule({
  declarations: [
    AppComponent,

    CardComponent,
    CodeComponent,
    ContentSetIndeterminateComponent,

    InstallLibComponent,
    InstallScssCustomizeComponent,

    DemosCheckboxComponent,
    DemoCheckboxBasicComponent,
    DemoCheckboxSwitchComponent,
    DemoCheckboxColorComponent,
    DemoCheckboxFontIconComponent,
    DemoCheckboxSvgComponent,
    DemoCheckboxImageComponent,
    DemoCheckboxAnimationComponent,
    DemoCheckboxToggleComponent,
    DemoCheckboxScalabilityComponent,
    DemoCheckboxStatesComponent,

    ApiCheckboxComponent,
    ApiInterfacesComponent,
    ApiEnumsComponent,
    ApiCheckboxWillChangeComponent,
    ApiRadioGroupComponent,
    ApiRadioComponent,
    RadioWillChangeApiComponent,
    ApiToggleComponent,
    ApiToggleWillChangeComponent,
    ApiHoverComponent,
    ApiHoverWillChangeComponent,
    ApiIndeterminateComponent,
    ApiIndeterminateWillChangeComponent,
    ApiIconComponent,
    ApiSvgComponent,
    ApiImageComponent,

    MixedCheckboxColorComponent,
    MixedCheckboxOutlineComponent,
    MixedCheckboxSquareFillComponent,
    MixedCheckboxSquareFillOutlineComponent,
    MixedCheckboxSquareThickComponent,
    MixedCheckboxSquareThickOutlineComponent,
    MixedCheckboxCurveComponent,
    MixedCheckboxCurveOutlineComponent,
    MixedCheckboxCurveFillComponent,
    MixedCheckboxCurveFillOutlineComponent,
    MixedCheckboxCurveThickComponent,
    MixedCheckboxCurveThickOutlineComponent,
    MixedCheckboxRoundComponent,
    MixedCheckboxRoundOutlineComponent,
    MixedCheckboxRoundFillComponent,
    MixedCheckboxRoundFillOutlineComponent,
    MixedCheckboxRoundThickComponent,
    MixedCheckboxRoundThickOutlineComponent,
    MixedCheckboxSwitchComponent,
    DemoCheckboxAllComponent,
    DemoCheckboxPlainComponent,
    DemoCheckboxDisableComponent,
    DemoCheckboxLockComponent,
    DemoCheckboxSizeComponent,
    DemoCheckboxAnimationSmoothComponent,
    DemoCheckboxAnimationJellyComponent,
    DemoCheckboxAnimationTadaComponent,
    DemoCheckboxAnimationRotateComponent,
    DemoAnimationCheckboxPulseComponent,
    DemoRadioButtonComponent,
    DemoRadioButtonColorComponent,
    DemoRadioButtonColorIconComponent,
    DemoRadioButtonColorOutlineIconComponent,
    DemoRadioButtonAnimationComponent,
    DemoRadioButtonPlainComponent,
    DemoRadioButtonSwitchComponent,
    DemoRadioButtonAllComponent,
    DemosRadioButtonComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
    NgxPrettyCheckboxModule,
    HighlightJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
