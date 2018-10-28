import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { CodeComponent } from './components/code/code.component';
import { NgModule } from '@angular/core';
import { DemoAnimationComponent } from './components/demo-animation/demo-animation.component';
import { DemoBasicCheckboxComponent } from './components/demo-basic-checkbox/demo-basic-checkbox.component';
import { DemoColorComponent } from './components/demo-color/demo-color.component';
import { DemoFontIconComponent } from './components/demo-font-icon/demo-font-icon.component';
import { DemoImageComponent } from './components/demo-image/demo-image.component';
import { DemosComponent } from './components/demos/demos.component';
import { DemoSvgComponent } from './components/demo-svg/demo-svg.component';
import { DemoSwitchComponent } from './components/demo-switch/demo-switch.component';
import { FormsModule } from '@angular/forms';
import { HighlightJsModule } from 'ngx-highlight-js';
import { MixedColorComponent } from './components/demo-mixed-color/demo-mixed-color.component';
import { MixedCurveComponent } from './components/demo-mixed-curve/demo-mixed-curve.component';
import { MixedCurveFillComponent } from './components/demo-mixed-curve-fill/demo-mixed-curve-fill.component';
import { MixedCurveFillOutlineComponent } from './components/demo-mixed-curve-fill-outline/demo-mixed-curve-fill-outline.component';
import { MixedCurveOutlineComponent } from './components/demo-mixed-curve-outline/demo-mixed-curve-outline.component';
import { MixedCurveThickComponent } from './components/demo-mixed-curve-thick/demo-mixed-curve-thick.component';
import { MixedCurveThickOutlineComponent } from './components/demo-mixed-curve-thick-outline/demo-mixed-curve-thick-outline.component';
import { MixedOutlineComponent } from './components/demo-mixed-outline/demo-mixed-outline.component';
import { MixedRoundComponent } from './components/demo-mixed-round/demo-mixed-round.component';
import { MixedRoundFillComponent } from './components/demo-mixed-round-fill/demo-mixed-round-fill.component';
import { MixedRoundFillOutlineComponent } from './components/demo-mixed-round-fill-outline/demo-mixed-round-fill-outline.component';
import { MixedRoundOutlineComponent } from './components/demo-mixed-round-outline/demo-mixed-round-outline.component';
import { MixedRoundThickComponent } from './components/demo-mixed-round-thick/demo-mixed-round-thick.component';
import { MixedRoundThickOutlineComponent } from './components/demo-mixed-round-thick-outline/demo-mixed-round-thick-outline.component';
import { MixedSquareFillComponent } from './components/demo-mixed-square-fill/demo-mixed-square-fill.component';
import { MixedSquareFillOutlineComponent } from './components/demo-mixed-square-fill-outline/demo-mixed-square-fill-outline.component';
import { MixedSquareThickComponent } from './components/demo-mixed-square-thick/demo-mixed-square-thick.component';
import { MixedSquareThickOutlineComponent } from './components/demo-mixed-square-thick-outline/demo-mixed-square-thick-outline.component';
import { MixedSwitchComponent } from './components/demo-mixed-switch/demo-mixed-switch.component';
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';
import { RouterModule } from '@angular/router';
import { routes } from 'src/routes';
import { DemoToggleComponent } from './components/demo-toggle/demo-toggle.component';
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
import { DemoScalabilityComponent } from './components/demo-scalability/demo-scalability.component';
import { DemoStatesComponent } from './components/demo-states/demo-states.component';
import { DemoCheckboxAllComponent } from './components/demo-checkbox-all/demo-checkbox-all.component';





@NgModule({
  declarations: [
    AppComponent,

    CardComponent,
    CodeComponent,
    ContentSetIndeterminateComponent,

    InstallLibComponent,
    InstallScssCustomizeComponent,

    DemosComponent,
    DemoBasicCheckboxComponent,
    DemoSwitchComponent,
    DemoColorComponent,
    DemoFontIconComponent,
    DemoSvgComponent,
    DemoImageComponent,
    DemoAnimationComponent,
    DemoToggleComponent,
    DemoScalabilityComponent,
    DemoStatesComponent,

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

    MixedColorComponent,
    MixedOutlineComponent,
    MixedSquareFillComponent,
    MixedSquareFillOutlineComponent,
    MixedSquareThickComponent,
    MixedSquareThickOutlineComponent,
    MixedCurveComponent,
    MixedCurveOutlineComponent,
    MixedCurveFillComponent,
    MixedCurveFillOutlineComponent,
    MixedCurveThickComponent,
    MixedCurveThickOutlineComponent,
    MixedRoundComponent,
    MixedRoundOutlineComponent,
    MixedRoundFillComponent,
    MixedRoundFillOutlineComponent,
    MixedRoundThickComponent,
    MixedRoundThickOutlineComponent,
    MixedSwitchComponent,
    DemoCheckboxAllComponent,

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
