import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';
import { HighlightJsModule } from 'ngx-highlight-js';

import { routes } from 'src/routes';
import { DemosComponent } from './components/demos/demos.component';
import { CardComponent } from './components/card/card.component';
import { DemoBasicCheckboxComponent } from './components/demo-basic-checkbox/demo-basic-checkbox.component';
import { CodeComponent } from './components/code/code.component';
import { CheckboxApiComponent } from './components/checkbox-api/checkbox-api.component';
import { InterfacesApiComponent } from './components/interfaces-api/interfaces-api.component';
import { EnumsApiComponent } from './components/enums-api/enums-api.component';
import { DemoSwitchComponent } from './components/demo-switch/demo-switch.component';
import { DemoColorComponent } from './components/demo-color/demo-color.component';
import { MixedColorComponent } from './components/demo-color/mixed-color/mixed-color.component';
import { OutlineColorComponent } from './components/demo-color/outline-color/outline-color.component';
import { SquareFillColorComponent } from './components/demo-color/square-fill-color/square-fill-color.component';
import { SquareFillOutlineColorComponent } from './components/demo-color/square-fill-outline-color/square-fill-outline-color.component';
import { SquareThickOutlineColorComponent } from './components/demo-color/square-thick-outline-color/square-thick-outline-color.component';
import { SquareThickColorComponent } from './components/demo-color/square-thick-color/square-thick-color.component';
import { CurveColorComponent } from './components/demo-color/curve-color/curve-color.component';
import { CurveOutlineColorComponent } from './components/demo-color/curve-outline-color/curve-outline-color.component';
import { CurveFillOutlineColorComponent } from './components/demo-color/curve-fill-outline-color/curve-fill-outline-color.component';
import { CurveFillColorComponent } from './components/demo-color/curve-fill-color/curve-fill-color.component';
import { CurveThickColorComponent } from './components/demo-color/curve-thick-color/curve-thick-color.component';
import { CurveThickOutlineColorComponent } from './components/demo-color/curve-thick-outline-color/curve-thick-outline-color.component';
import { RoundOutlineColorComponent } from './components/demo-color/round-outline-color/round-outline-color.component';
import { RoundColorComponent } from './components/demo-color/round-color/round-color.component';
import { RoundFillColorComponent } from './components/demo-color/round-fill-color/round-fill-color.component';
import { RoundFillOutlineColorComponent } from './components/demo-color/round-fill-outline-color/round-fill-outline-color.component';
import { RoundThickOutlineColorComponent } from './components/demo-color/round-thick-outline-color/round-thick-outline-color.component';
import { RoundThickColorComponent } from './components/demo-color/round-thick-color/round-thick-color.component';
import { SwitchColorComponent } from './components/demo-color/switch-color/switch-color.component';


@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    CardComponent,
    DemoBasicCheckboxComponent,
    CheckboxApiComponent,
    InterfacesApiComponent,
    EnumsApiComponent,
    CodeComponent,
    DemoSwitchComponent,
    DemoColorComponent,
    MixedColorComponent,
    OutlineColorComponent,
    SquareFillColorComponent,
    SquareFillOutlineColorComponent,
    SquareThickOutlineColorComponent,
    SquareThickColorComponent,
    CurveColorComponent,
    CurveOutlineColorComponent,
    CurveFillOutlineColorComponent,
    CurveFillColorComponent,
    CurveThickColorComponent,
    CurveThickOutlineColorComponent,
    RoundOutlineColorComponent,
    RoundColorComponent,
    RoundFillColorComponent,
    RoundFillOutlineColorComponent,
    RoundThickOutlineColorComponent,
    RoundThickColorComponent,
    SwitchColorComponent
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
