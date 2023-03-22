import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckBoxChange } from 'ngx-pretty-checkbox';
import { DemoCheckboxesRouteName } from 'src/app/models/enums';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-demos-checkbox',
  templateUrl: './demos-checkbox.component.html',
  styleUrls: ['./demos-checkbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemosCheckboxComponent implements OnInit {

  public readonly DemoCheckboxesRouteName = DemoCheckboxesRouteName;

  constructor(private navigation: NavigationService) { }

  ngOnInit() {
  }

  onChange(event: PrettyCheckBoxChange) {
    console.log('event', event);
  }

  goToDemoCheckbox(page?: DemoCheckboxesRouteName) {
    this.navigation.goToDemoCheckbox(page);
  }
}
