import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DemoCheckboxesRouteName, MainRouteName, ApiRouteName, InstallRouteName, DemoRadioRouteName } from './enums';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private route: Router) { }

  goToDemoCheckbox(page?: DemoCheckboxesRouteName) {
    if (page) {
      this.route.navigate([MainRouteName.DemoCheckbox, page]);

    } else {
      this.route.navigate([MainRouteName.DemoCheckbox]);
    }
  }

  goToDemoRadio(page?: DemoRadioRouteName) {
    if (page) {
      this.route.navigate([MainRouteName.DemoRadio, page]);

    } else {
      this.route.navigate([MainRouteName.DemoRadio]);
    }
  }

  goToApi(page?: ApiRouteName) {
    if (page) {
      this.route.navigate([MainRouteName.API, page]);

    } else {
      this.route.navigate([MainRouteName.API]);
    }
  }

  goToInstall(page?: InstallRouteName) {
    if (page) {
      this.route.navigate([MainRouteName.Install, page]);

    } else {
      this.route.navigate([MainRouteName.Install]);
    }
  }
}
