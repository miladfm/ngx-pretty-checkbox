import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';
import { HighlightJsModule } from 'ngx-highlight-js';

import { routes } from 'src/routes';
import { DemosComponent } from './components/demos/demos.component';
import { CardComponent } from './components/card/card.component';
import { DemoBasicCheckboxComponent } from './components/demo-basic-checkbox/demo-basic-checkbox.component';
import { CodeComponent } from './components/code/code.component';


@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    CardComponent,
    DemoBasicCheckboxComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
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
