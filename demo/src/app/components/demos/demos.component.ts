import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckBoxChange } from 'ngx-pretty-checkbox';
import { DemoRouteName } from 'src/app/models/enums';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemosComponent implements OnInit {

  public readonly DemoRouteName = DemoRouteName;

  constructor(private navigation: NavigationService) { }

  ngOnInit() {
  }

  onChange(event: PrettyCheckBoxChange) {
    console.log('event', event);
  }

  goToDemo(page?: DemoRouteName) {
    this.navigation.goToDemo(page);
  }
}
