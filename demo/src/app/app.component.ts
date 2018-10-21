import { Component } from '@angular/core';
import { DemoRouteName } from './models/enums';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public readonly DemoRouteName = DemoRouteName;

  constructor(private navigation: NavigationService) {}

  goToDemo(page?: DemoRouteName) {
    this.navigation.goToDemo(page);
  }

}
