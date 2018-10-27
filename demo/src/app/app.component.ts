import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DemoRouteName, ApiRouteName } from './models/enums';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public readonly DemoRouteName = DemoRouteName;
  public readonly ApiRouteName = ApiRouteName;

  public isAccordingMixedOpen = false;

  constructor(private navigation: NavigationService) {}

  goToDemo(page?: DemoRouteName) {
    this.navigation.goToDemo(page);
  }

  goToApi(page?: ApiRouteName) {
    this.navigation.goToApi(page);
  }

  setMixedAccording(isOpen: boolean) {
    this.isAccordingMixedOpen = isOpen;
  }

}
