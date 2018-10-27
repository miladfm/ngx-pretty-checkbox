import { DemoSvgComponent } from './app/components/demo-svg/demo-svg.component';
import { DemoFontIconComponent } from './app/components/demo-font-icon/demo-font-icon.component';
import { DemoSwitchComponent } from './app/components/demo-switch/demo-switch.component';
import { Routes } from '@angular/router';
import { DemosComponent } from './app/components/demos/demos.component';
import { DemoBasicCheckboxComponent } from './app/components/demo-basic-checkbox/demo-basic-checkbox.component';
import { CheckboxApiComponent } from './app/components/checkbox-api/checkbox-api.component';
import { InterfacesApiComponent } from './app/components/interfaces-api/interfaces-api.component';
import { EnumsApiComponent } from './app/components/enums-api/enums-api.component';
import { DemoColorComponent } from './app/components/demo-color/demo-color.component';
import { DemoImageComponent } from './app/components/demo-image/demo-image.component';
import { DemoAnimationComponent } from './app/components/demo-animation/demo-animation.component';
import { DemoRouteName, MainRouteName, ApiRouteName } from './app/models/enums';
import { MixedColorComponent } from './app/components/demo-mixed-color/demo-mixed-color.component';
import { MixedOutlineComponent } from './app/components/demo-mixed-outline/demo-mixed-outline.component';
import { MixedSquareFillComponent } from './app/components/demo-mixed-square-fill/demo-mixed-square-fill.component';
import { MixedSquareFillOutlineComponent } from './app/components/demo-mixed-square-fill-outline/demo-mixed-square-fill-outline.component';
import { MixedSquareThickComponent } from './app/components/demo-mixed-square-thick/demo-mixed-square-thick.component';
import { MixedSquareThickOutlineComponent } from './app/components/demo-mixed-square-thick-outline/demo-mixed-square-thick-outline.component';
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
import { CheckboxWillChangeApiComponent } from './app/components/checkbox-will-change-api/checkbox-will-change-api.component';
import { RadioGroupApiComponent } from './app/components/checkbox-will-change-api/components/radio-group-api/radio-group-api.component';
import { RadioApiComponent } from './app/components/checkbox-will-change-api/components/radio-api/radio-api.component';
import { RadioWillChangeApiComponent } from './app/components/checkbox-will-change-api/components/radio-will-change-api/radio-will-change-api.component';

export const routes: Routes = [

  // { path: '', redirectTo: '/main', pathMatch: 'full' },

  {
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
    // demo/animations
    path: `${MainRouteName.Demo}/${DemoRouteName.Animations}`,
    component : DemoAnimationComponent



  }, {
    // api/checkbox
    path: `${MainRouteName.API}/${ApiRouteName.Checkbox}`,
    component: CheckboxApiComponent

  }, {
    // api/checkbox-will-change
    path: `${MainRouteName.API}/${ApiRouteName.CheckboxWillChange}`,
    component: CheckboxWillChangeApiComponent

  }, {
    // api/radio-group
    path: `${MainRouteName.API}/${ApiRouteName.RadioGroup}`,
    component: RadioGroupApiComponent

  }, {
    // api/radio
    path: `${MainRouteName.API}/${ApiRouteName.Radio}`,
    component: RadioApiComponent

  }, {
    // api/radio-will-change
    path: `${MainRouteName.API}/${ApiRouteName.RadioWillChange}`,
    component: RadioWillChangeApiComponent

  }, {
    // api/interfaces
    path: `${MainRouteName.API}/${ApiRouteName.Interfaces}`,
    component: InterfacesApiComponent

  }, {
    // api/enums
    path: `${MainRouteName.API}/${ApiRouteName.Enums}`,
    component: EnumsApiComponent

  }, {
    path: '**',
    redirectTo: '/'
  }

];
