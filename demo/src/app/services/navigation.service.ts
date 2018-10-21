import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DemoRouteName, MainRouteName } from '../models/enums';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private route: Router) { }

  goToDemo(page?: DemoRouteName) {
    if (page) {
      this.route.navigate([MainRouteName.Demo, page]);

    } else {
      this.route.navigate([MainRouteName.Demo]);
    }
  }

}
