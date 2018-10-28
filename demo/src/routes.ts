import { DemoAnimationRotateComponent } from './app/components/demo-animation-rotate/demo-animation-rotate.component';
import { DemoAnimationTadaComponent } from './app/components/demo-animation-tada/demo-animation-tada.component';
import { DemoAnimationJellyComponent } from './app/components/demo-animation-jelly/demo-animation-jelly.component';
import { DemoAnimationSmoothComponent } from './app/components/demo-animation-smooth/demo-animation-smooth.component';
import { DemoSizeComponent } from './app/components/demo-size/demo-size.component';
import { DemoLockComponent } from './app/components/demo-lock/demo-lock.component';
import { DemoDisableComponent } from './app/components/demo-disable/demo-disable.component';
import { DemoSvgComponent } from './app/components/demo-svg/demo-svg.component';
import { DemoFontIconComponent } from './app/components/demo-font-icon/demo-font-icon.component';
import { DemoSwitchComponent } from './app/components/demo-switch/demo-switch.component';
import { Routes } from '@angular/router';
import { DemosComponent } from './app/components/demos/demos.component';
import { DemoBasicCheckboxComponent } from './app/components/demo-basic-checkbox/demo-basic-checkbox.component';
import { DemoColorComponent } from './app/components/demo-color/demo-color.component';
import { DemoImageComponent } from './app/components/demo-image/demo-image.component';
import { DemoAnimationComponent } from './app/components/demo-animation/demo-animation.component';
import { DemoRouteName, MainRouteName, ApiRouteName, InstallRouteName } from './app/models/enums';
import { MixedColorComponent } from './app/components/demo-mixed-color/demo-mixed-color.component';
import { MixedOutlineComponent } from './app/components/demo-mixed-outline/demo-mixed-outline.component';
import { MixedSquareFillComponent } from './app/components/demo-mixed-square-fill/demo-mixed-square-fill.component';
import { MixedSquareFillOutlineComponent } from './app/components/demo-mixed-square-fill-outline/demo-mixed-square-fill-outline.component';
import { MixedSquareThickComponent } from './app/components/demo-mixed-square-thick/demo-mixed-square-thick.component';
import { MixedCurveComponent } from './app/components/demo-mixed-curve/demo-mixed-curve.component';
import { MixedCurveOutlineComponent } from './app/components/demo-mixed-curve-outline/demo-mixed-curve-outline.component';
import { MixedCurveFillComponent } from './app/components/demo-mixed-curve-fill/demo-mixed-curve-fill.component';
import { MixedCurveFillOutlineComponent } from './app/components/demo-mixed-curve-fill-outline/demo-mixed-curve-fill-outline.component';
import { MixedCurveThickComponent } from './app/components/demo-mixed-curve-thick/demo-mixed-curve-thick.component';
import { MixedCurveThickOutlineComponent } from './app/components/demo-mixed-curve-thick-outline/demo-mixed-curve-thick-outline.component';
import { MixedRoundComponent } from './app/components/demo-mixed-round/demo-mixed-round.component';
import { MixedRoundOutlineComponent } from './app/components/demo-mixed-round-outline/demo-mixed-round-outline.component';
import { MixedRoundFillComponent } from './app/components/demo-mixed-round-fill/demo-mixed-round-fill.component';
import { MixedRoundFillOutlineComponent } from './app/components/demo-mixed-round-fill-outline/demo-mixed-round-fill-outline.component';
import { MixedRoundThickComponent } from './app/components/demo-mixed-round-thick/demo-mixed-round-thick.component';
import { MixedRoundThickOutlineComponent } from './app/components/demo-mixed-round-thick-outline/demo-mixed-round-thick-outline.component';
import { MixedSwitchComponent } from './app/components/demo-mixed-switch/demo-mixed-switch.component';
import { MixedSquareThickOutlineComponent } from './app/components/demo-mixed-square-thick-outline/demo-mixed-square-thick-outline.component';
import { ApiCheckboxComponent } from './app/components/api-checkbox/api-checkbox.component';
import { ApiCheckboxWillChangeComponent } from './app/components/api-checkbox-will-change/api-checkbox-will-change.component';
import { ApiRadioGroupComponent } from './app/components/api-radio-group/api-radio-group.component';
import { ApiRadioComponent } from './app/components/api-radio/api-radio.component';
import { RadioWillChangeApiComponent } from './app/components/api-radio-will-change/api-radio-will-change.component';
import { ApiToggleComponent } from './app/components/api-toggle/api-toggle.component';
import { ApiToggleWillChangeComponent } from './app/components/api-toggle-will-change/api-toggle-will-change.component';
import { ApiHoverComponent } from './app/components/api-hover/api-hover.component';
import { ApiHoverWillChangeComponent } from './app/components/api-hover-will-change/api-hover-will-change.component';
import { ApiIndeterminateComponent } from './app/components/api-indeterminate/api-indeterminate.component';
import { ApiIndeterminateWillChangeComponent } from './app/components/api-indeterminate-will-change/api-indeterminate-will-change.component';
import { ApiIconComponent } from './app/components/api-icon/api-icon.component';
import { ApiSvgComponent } from './app/components/api-svg/api-svg.component';
import { ApiImageComponent } from './app/components/api-image/api-image.component';
import { ApiInterfacesComponent } from './app/components/api-interfaces/api-interfaces.component';
import { ApiEnumsComponent } from './app/components/api-enums/api-enums.component';
import { InstallLibComponent } from './app/components/install-lib/install-lib.component';
import { InstallScssCustomizeComponent } from './app/components/install-scss-customize/install-scss-customize.component';
import { DemoToggleComponent } from './app/components/demo-toggle/demo-toggle.component';
import { DemoScalabilityComponent } from './app/components/demo-scalability/demo-scalability.component';
import { DemoStatesComponent } from './app/components/demo-states/demo-states.component';
import { DemoPlainComponent } from './app/components/demo-plain/demo-plain.component';
import { DemoAnimationPulseComponent } from './app/components/demo-animation-pulse/demo-animation-pulse.component';

const MAIN_PAGE = `${MainRouteName.Install}/${InstallRouteName.Lib}`;

export const routes: Routes = [

  { path: '', redirectTo: MAIN_PAGE, pathMatch: 'full' },

  {
    // install/lib
    path: `${MainRouteName.Install}/${InstallRouteName.Lib}`,
    component: InstallLibComponent

  }, {
    // install/scss-customize
    path: `${MainRouteName.Install}/${InstallRouteName.ScssCustomize}`,
    component: InstallScssCustomizeComponent

  }, {
    // demo
    path: `${MainRouteName.Demo}`,
    component: DemosComponent

  }, {
    // demo/mixed-color
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedColor}`,
    component: MixedColorComponent

  }, {
    // demo/mixed-outline
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedOutline}`,
    component: MixedOutlineComponent

  }, {
    // demo/mixed-square-fill
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedSquareFill}`,
    component: MixedSquareFillComponent

  }, {
    // demo/mixed-square-fill-outline
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedSquareFillOutline}`,
    component: MixedSquareFillOutlineComponent

  }, {
    // demo/mixed-square-thick
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedSquareThick}`,
    component: MixedSquareThickComponent

  }, {
    // demo/mixed-square-thick-outline
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedSquareThickOutline}`,
    component: MixedSquareThickOutlineComponent

  }, {
    // demo/mixed-curve
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedCurve}`,
    component: MixedCurveComponent

  }, {
    // demo/mixed-curve-outline
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedCurveOutline}`,
    component: MixedCurveOutlineComponent

  }, {
    // demo/mixed-curve-fill
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedCurveFill}`,
    component: MixedCurveFillComponent

  }, {
    // demo/mixed-curve-fill-outline
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedCurveFillOutline}`,
    component: MixedCurveFillOutlineComponent

  }, {
    // demo/mixed-curve-thick
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedCurveThick}`,
    component: MixedCurveThickComponent

  }, {
    // demo/mixed-curve-thick-outline
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedCurveThickOutline}`,
    component: MixedCurveThickOutlineComponent

  }, {
    // demo/mixed-round
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedRound}`,
    component: MixedRoundComponent

  }, {
    // demo/mixed-round-outline
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedRoundOutline}`,
    component: MixedRoundOutlineComponent

  }, {
    // demo/mixed-round-fill
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedRoundFill}`,
    component: MixedRoundFillComponent

  }, {
    // demo/mixed-round-fill-outline
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedRoundFillOutline}`,
    component: MixedRoundFillOutlineComponent

  }, {
    // demo/mixed-round-thick
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedRoundThick}`,
    component: MixedRoundThickComponent

  }, {
    // mixed-round-thick-outline
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedRoundThickOutline}`,
    component: MixedRoundThickOutlineComponent

  }, {
    // demo/mixed-switch
    path: `${MainRouteName.Demo}/${DemoRouteName.MixedSwitch}`,
    component: MixedSwitchComponent


  }, {
    // demo/basic-checkbox
    path: `${MainRouteName.Demo}/${DemoRouteName.BasicCheckbox}`,
    component: DemoBasicCheckboxComponent

  }, {
    // demo/switch
    path: `${MainRouteName.Demo}/${DemoRouteName.Switch}`,
    component : DemoSwitchComponent

  }, {
    // demo/colors
    path: `${MainRouteName.Demo}/${DemoRouteName.Colors}`,
    component : DemoColorComponent

  }, {
    // demo/font-icons
    path: `${MainRouteName.Demo}/${DemoRouteName.FontIcons}`,
    component : DemoFontIconComponent

  }, {
    // demo/svg
    path: `${MainRouteName.Demo}/${DemoRouteName.Svg}`,
    component : DemoSvgComponent

  }, {
    // demo/image
    path: `${MainRouteName.Demo}/${DemoRouteName.Image}`,
    component : DemoImageComponent

  }, {
    // demo/toggle
    path: `${MainRouteName.Demo}/${DemoRouteName.Toggle}`,
    component : DemoToggleComponent

  }, {
    // demo/indeterminate
    path: `${MainRouteName.Demo}/${DemoRouteName.States}`,
    component : DemoStatesComponent

  }, {
    // demo/scalability
    path: `${MainRouteName.Demo}/${DemoRouteName.Scalability}`,
    component : DemoScalabilityComponent
  }, {
    // demo/animations
    path: `${MainRouteName.Demo}/${DemoRouteName.Animations}`,
    component : DemoAnimationComponent
  }, {
    // demo/animation-smooth
    path: `${MainRouteName.Demo}/${DemoRouteName.AnimationSmooth}`,
    component : DemoAnimationSmoothComponent
  }, {
    // demo/animation-jelly
    path: `${MainRouteName.Demo}/${DemoRouteName.AnimationJelly}`,
    component : DemoAnimationJellyComponent
  }, {
    // demo/animation-tada
    path: `${MainRouteName.Demo}/${DemoRouteName.AnimationTada}`,
    component : DemoAnimationTadaComponent
  }, {
    // demo/animation-rotate
    path: `${MainRouteName.Demo}/${DemoRouteName.AnimationRotate}`,
    component : DemoAnimationRotateComponent
  }, {
    // demo/animation-pulse
    path: `${MainRouteName.Demo}/${DemoRouteName.AnimationPulse}`,
    component : DemoAnimationPulseComponent
  }, {
    // demo/plain
    path: `${MainRouteName.Demo}/${DemoRouteName.Plain}`,
    component : DemoPlainComponent

  }, {
    // demo/disable
    path: `${MainRouteName.Demo}/${DemoRouteName.Disable}`,
    component : DemoDisableComponent
  }, {
    // demo/lock
    path: `${MainRouteName.Demo}/${DemoRouteName.Lock}`,
    component : DemoLockComponent

  }, {
    // demo/size
    path: `${MainRouteName.Demo}/${DemoRouteName.Size}`,
    component : DemoSizeComponent

  }, {
    // api/checkbox
    path: `${MainRouteName.API}/${ApiRouteName.Checkbox}`,
    component: ApiCheckboxComponent

  }, {
    // api/checkbox-will-change
    path: `${MainRouteName.API}/${ApiRouteName.CheckboxWillChange}`,
    component: ApiCheckboxWillChangeComponent

  }, {
    // api/radio-group
    path: `${MainRouteName.API}/${ApiRouteName.RadioGroup}`,
    component: ApiRadioGroupComponent

  }, {
    // api/radio
    path: `${MainRouteName.API}/${ApiRouteName.Radio}`,
    component: ApiRadioComponent

  }, {
    // api/radio-will-change
    path: `${MainRouteName.API}/${ApiRouteName.RadioWillChange}`,
    component: RadioWillChangeApiComponent

  }, {
    // api/toggle
    path: `${MainRouteName.API}/${ApiRouteName.Toggle}`,
    component: ApiToggleComponent

  }, {
    // api/toggle-will-change'
    path: `${MainRouteName.API}/${ApiRouteName.ToggleWillChange}`,
    component: ApiToggleWillChangeComponent

  }, {
    // api/hover
    path: `${MainRouteName.API}/${ApiRouteName.Hover}`,
    component: ApiHoverComponent

  }, {
    // api/hover-will-change'
    path: `${MainRouteName.API}/${ApiRouteName.HoverWillChange}`,
    component: ApiHoverWillChangeComponent

  }, {
    // api/indeterminate
    path: `${MainRouteName.API}/${ApiRouteName.Indeterminate}`,
    component: ApiIndeterminateComponent

  }, {
    // api/indeterminate-will-change'
    path: `${MainRouteName.API}/${ApiRouteName.IndeterminateWillChange}`,
    component: ApiIndeterminateWillChangeComponent

  }, {
    // api/icon
    path: `${MainRouteName.API}/${ApiRouteName.Icon}`,
    component: ApiIconComponent

  }, {
    // api/svg
    path: `${MainRouteName.API}/${ApiRouteName.Svg}`,
    component: ApiSvgComponent

  }, {
    // api/image
    path: `${MainRouteName.API}/${ApiRouteName.Image}`,
    component: ApiImageComponent

  }, {
    // api/interfaces
    path: `${MainRouteName.API}/${ApiRouteName.Interfaces}`,
    component: ApiInterfacesComponent

  }, {
    // api/enums
    path: `${MainRouteName.API}/${ApiRouteName.Enums}`,
    component: ApiEnumsComponent

  }, {
    path: '**',
    redirectTo: MAIN_PAGE
  }

];
