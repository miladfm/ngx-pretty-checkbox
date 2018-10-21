import { Routes } from '@angular/router';
import { DemosComponent } from './app/components/demos/demos.component';
import { DemoBasicCheckboxComponent } from './app/components/demo-basic-checkbox/demo-basic-checkbox.component';

export const routes: Routes = [

  // { path: '', redirectTo: '/main', pathMatch: 'full' },

  {
    path: 'demo',
    component: DemosComponent

  }, {
    path: 'demo/basic-checkbox',
    component: DemoBasicCheckboxComponent

  }, {
    path: '**',
    redirectTo: '/'
  }

];
