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
    DemoColorComponent
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
