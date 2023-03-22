import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';
import { DemoRadioRouteName } from 'src/app/models/enums';
import { PrettyCheckBoxChange } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-demos-radio-button',
  templateUrl: './demos-radio-button.component.html',
  styleUrls: ['./demos-radio-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemosRadioButtonComponent implements OnInit {

  public readonly DemoRadioRouteName = DemoRadioRouteName;

  constructor(private navigation: NavigationService) { }

  ngOnInit() {
  }

  onChange(event: PrettyCheckBoxChange) {
    console.log('event', event);
  }

  goToDemoCheckbox(page?: DemoRadioRouteName) {
    this.navigation.goToDemoRadio(page);
  }

}

