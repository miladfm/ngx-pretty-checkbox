import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { CheckboxApiComponent } from './components/checkbox-api/checkbox-api.component';
import { CheckboxWillChangeApiComponent } from './components/checkbox-will-change-api/checkbox-will-change-api.component';
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
import { EnumsApiComponent } from './components/enums-api/enums-api.component';
import { FormsModule } from '@angular/forms';
import { HighlightJsModule } from 'ngx-highlight-js';
import { InterfacesApiComponent } from './components/interfaces-api/interfaces-api.component';
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
import { RadioApiComponent } from './components/checkbox-will-change-api/components/radio-api/radio-api.component';
import { RadioGroupApiComponent } from './components/checkbox-will-change-api/components/radio-group-api/radio-group-api.component';
import { RadioWillChangeApiComponent } from './components/checkbox-will-change-api/components/radio-will-change-api/radio-will-change-api.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/routes';





@NgModule({
  declarations: [
    AppComponent,

    CardComponent,
    CodeComponent,

    DemosComponent,
    DemoBasicCheckboxComponent,
    DemoSwitchComponent,
    DemoColorComponent,
    DemoFontIconComponent,
    DemoSvgComponent,
    DemoImageComponent,
    DemoAnimationComponent,

    CheckboxApiComponent,
    InterfacesApiComponent,
    EnumsApiComponent,
    CheckboxWillChangeApiComponent,
    RadioGroupApiComponent,
    RadioApiComponent,
    RadioWillChangeApiComponent,

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
    MixedSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, {
      // useHash: true,
    }),
    NgxPrettyCheckboxModule,
    HighlightJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
