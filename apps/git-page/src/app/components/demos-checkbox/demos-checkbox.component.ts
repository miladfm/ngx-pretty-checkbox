import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PrettyCheckBoxChange } from '@lib/ngx-pretty-checkbox';
import { DemoCheckboxesRouteName } from '../../enums';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'app-demos-checkbox',
  templateUrl: './demos-checkbox.component.html',
  styles: [`
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .color-preview {
      display: inline-block;
      width: 1em;
      height: 1em;
      background-color: #bdc3c7;
      border-radius: 100%;
      margin: 10px 2px 0px 2px;
    }

    .color-preview.primary {
      background-color: #428bca;
    }

    .color-preview.success {
      background-color: #5cb85c;
    }

    span.color-preview.warning {
      background-color: #f0ad4e;
    }

    span.color-preview.info {
      background-color: #5bc0de;
    }

    span.color-preview.danger {
      background-color: #d9534f;
    }

  `]
})
export class DemosCheckboxComponent implements OnInit {

  public readonly DemoCheckboxesRouteName = DemoCheckboxesRouteName;

  constructor(private navigation: NavigationService) { }

  ngOnInit() {
  }

  onChange(event: PrettyCheckBoxChange) {
  }

  goToDemoCheckbox(page?: DemoCheckboxesRouteName) {
    this.navigation.goToDemoCheckbox(page);
  }
}
