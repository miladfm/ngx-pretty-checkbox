import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrettyCheckBoxChange } from 'ngx-pretty-checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: Router) {}

  goToDemo() {
    this.route.navigate(['demo']);
  }

  goToSubDemo(page: string) {
    this.route.navigate(['demo', page]);
  }

}
