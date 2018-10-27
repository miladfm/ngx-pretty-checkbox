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
import { DemoRouteName } from './app/models/enums';
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

export const routes: Routes = [

  // { path: '', redirectTo: '/main', pathMatch: 'full' },

  {
    path: 'demo',
    component: DemosComponent

  }, {
    path: `demo/${DemoRouteName.MixedColor}`,
    component: MixedColorComponent
  }, {
    path: `demo/${DemoRouteName.MixedOutline}`,
    component: MixedOutlineComponent

  }, {
    path: `demo/${DemoRouteName.MixedSquareFill}`,
    component: MixedSquareFillComponent

  }, {
    path: `demo/${DemoRouteName.MixedSquareFillOutline}`,
    component: MixedSquareFillOutlineComponent

  }, {
    path: `demo/${DemoRouteName.MixedSquareThick}`,
    component: MixedSquareThickComponent

  }, {
    path: `demo/${DemoRouteName.MixedSquareThickOutline}`,
    component: MixedSquareThickOutlineComponent

  }, {
    path: `demo/${DemoRouteName.MixedCurve}`,
    component: MixedCurveComponent

  }, {
    path: `demo/${DemoRouteName.MixedCurveOutline}`,
    component: MixedCurveOutlineComponent

  }, {
    path: `demo/${DemoRouteName.MixedCurveFill}`,
    component: MixedCurveFillComponent

  }, {
    path: `demo/${DemoRouteName.MixedCurveFillOutline}`,
    component: MixedCurveFillOutlineComponent

  }, {
    path: `demo/${DemoRouteName.MixedCurveThick}`,
    component: MixedCurveThickComponent

  }, {
    path: `demo/${DemoRouteName.MixedCurveThickOutline}`,
    component: MixedCurveThickOutlineComponent

  }, {
    path: `demo/${DemoRouteName.MixedRound}`,
    component: MixedRoundComponent

  }, {
    path: `demo/${DemoRouteName.MixedRoundOutline}`,
    component: MixedRoundOutlineComponent

  }, {
    path: `demo/${DemoRouteName.MixedRoundFill}`,
    component: MixedRoundFillComponent

  }, {
    path: `demo/${DemoRouteName.MixedRoundFillOutline}`,
    component: MixedRoundFillOutlineComponent

  }, {
    path: `demo/${DemoRouteName.MixedRoundThick}`,
    component: MixedRoundThickComponent

  }, {
    path: `demo/${DemoRouteName.MixedRoundThickOutline}`,
    component: MixedRoundThickOutlineComponent

  }, {
    path: `demo/${DemoRouteName.MixedSwitch}`,
    component: MixedSwitchComponent
// --------------------
  }, {
    path: 'demo/basic-checkbox',
    component: DemoBasicCheckboxComponent

  }, {
    path: 'demo/switch',
    component : DemoSwitchComponent

  }, {
    path: 'demo/colors',
    component : DemoColorComponent

  }, {
    path: 'demo/font-icons',
    component : DemoFontIconComponent

  }, {
    path: 'demo/svg',
    component : DemoSvgComponent

  }, {
    path: 'demo/image',
    component : DemoImageComponent

  }, {
    path: 'demo/animations',
    component : DemoAnimationComponent

  }, {
    path: 'api/checkbox',
    component: CheckboxApiComponent

  }, {
    path: 'api/interfaces',
    component: InterfacesApiComponent

  }, {
    path: 'api/enums',
    component: EnumsApiComponent

  }, {
    path: '**',
    redirectTo: '/'
  }

];
