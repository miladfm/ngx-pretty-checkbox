import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [`
    :host {
      margin: 25px;
    }
    .demo-card-wide.mdl-card {
      width: 250px;
      min-height: initial;
      height: auto;
      text-transform: none;
      text-align: left;
      padding: 16px;
    }

    .mdl-card__supporting-text {
      padding: 0px;
    }

    .mdl-card__title {
      padding: 0px;
    }

    .mdl-card__title-text {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
