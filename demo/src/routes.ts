import { Routes } from '@angular/router';
import { DemosComponent } from './app/demos/demos.component';

export const routes: Routes = [

  // { path: '', redirectTo: '/main', pathMatch: 'full' },

  {
    path: 'demo',
    component: DemosComponent

  }, {
    path: 'demo/demo1',
    component: DemosComponent

  }, {
    path: '**',
    redirectTo: '/'
  }

];
