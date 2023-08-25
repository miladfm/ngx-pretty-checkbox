<h1 align="center">
  <br>
  <a href="https://miladfm.github.io/ngx-pretty-checkbox/"><img src="/logo.gif" alt="Pretty checkbox angular" width="100"></a>
  <br> <br> NgxPrettyCheckbox <br>
</h1>

<h4 align="center">Quickly integrate pretty checkbox Components (checkbox, switch, radio button) with Angular </h4>

<p align="center">
  <a href="https://github.com/miladfm/ngx-pretty-checkbox/releases">
    <img src="https://img.shields.io/badge/release-v1.2.1-blue.svg">
  </a>

  <a href="https://github.com/angular/angular">
    <img src="https://img.shields.io/badge/angular-10.x-blue.svg">
  </a>

  <a href="https://lokesh-coder.github.io/pretty-checkbox/">
    <img src="https://img.shields.io/badge/pretty--checbox-3.x-blue.svg" alt="Github Release">
  </a>

   <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Licence">
  </a>
</p>
<br>

<div class="highlight highlight-source-shell">
<pre>
<div align="center"><strong >Demo and documentation</strong></div>
<div align="center"><a align="center" href="https://miladfm.github.io/ngx-pretty-checkbox/">https://miladfm.github.io/ngx-pretty-checkbox/</a></div>
</pre>
</div>

<div align="center">
<img src="/preview.gif" alt="Pretty checkbox preview"/>
</div>

<br><br><br><br>



### Changes log

| ngx-pretty-checkbox | angular | feature                                                                                                                                                                                                                                                                                                                       |
|---------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 16.0.0              | 16.x    |                                                                                                                                                                                                                                                                                                                               |
| 15.1.0              | 15.x    | Stateless checkbox. There is no local state to update the checkbox by the user interaction. The component emit only the new state event.  Use case: for a one-way data binding. For example, when the checkbox is clicked, a request should be sent to the server and the UI should be updated if the response is successful. |
| 15.0.0              | 15.x    | Standalone component                                                                                                                                                                                                                                                                                                          |
| 12.0.0              | 12.x    |                                                                                                                                                                                                                                                                                                                               |
| 11.0.0              | 11.x    |                                                                                                                                                                                                                                                                                                                               |
| 1.2.0               | >10.x   | ivy                                                                                                                                                                                                                                                                                                                           |
| 1.1.0               | >8.x    |                                                                                                                                                                                                                                                                                                                               |
| 1.0.4               | 6.x 7.x |                                                                                                                                                                                                                                                                                                                               |

### Installation
- **Step 1**

Install the pretty-checkbox from npm or yarn package manager
```sh
> npm install pretty-checkbox // or
> yarn add pretty-checkbox
```  
Alternatively, you can also use CDN link
```sh
https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css
```

<br>

- **Step 2**

Download pretty-checkbox angular module from [`npm`](https://www.npmjs.com/package/ngx-pretty-checkbox) package manager
```sh
> npm install ngx-pretty-checkbox
```


<br>

- **Step 3**

Add dist/pretty-checkbox.min.css file from node_module of pretty-checkbox in your html or import src/pretty-checkbox.scss file in your scss file
```sh
@import '~pretty-checkbox/src/pretty-checkbox.scss';
```
<br>

- **Step 4**

Add ngx-pretty-checkbox in your AppModule or component to import all standalone components
```sh
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';

@NgModule({
  imports: [
    ...,
    NgxPrettyCheckboxModule
  ],
  ...
})
export class AppModule { 
  ...
}
```

Or import the ngx-pretty-checkbox standalone components to you component
```sh
import {
  NgxPrettyCheckboxComponent,
  NgxPrettyCheckboxWillChangeComponent,
  NgxPrettyHoverComponent,
  NgxPrettyHoverWillChangeComponent,
  NgxPrettyIconDirective,
  NgxPrettyImageDirective,
  NgxPrettyIndeterminateComponent,
  NgxPrettyIndeterminateWillChangeComponent,
  NgxPrettyRadioComponent,
  NgxPrettyRadioGroupDirective,
  NgxPrettyRadioWillChangeComponent,
  NgxPrettySvgDirective,
  NgxPrettyToggleComponent,
  NgxPrettyToggleWillChangeComponent,
} from 'ngx-pretty-checkbox';

@Component({
  standalone: true,
  imports: [
    NgxPrettyCheckboxComponent,
    NgxPrettyCheckboxWillChangeComponent,
    NgxPrettyHoverComponent,
    NgxPrettyHoverWillChangeComponent,
    NgxPrettyIndeterminateComponent,
    NgxPrettyIndeterminateWillChangeComponent,
    NgxPrettyRadioComponent,
    NgxPrettyRadioWillChangeComponent,
    NgxPrettyToggleComponent,
    NgxPrettyToggleWillChangeComponent,
    NgxPrettyIconDirective,
    NgxPrettyImageDirective,
    NgxPrettyRadioGroupDirective,
    NgxPrettySvgDirective
  ],
  selector: 'my-component',
  ...
})
export class MyComponent {
}
```
<br>

- **Step 5**

Basic usage
```sh
<p-checkbox>
  Default
</p-checkbox>
```
<br><br><br>


Stateless usage
```sh
@Component({
  standalone: true,
  imports: [NgxPrettyCheckboxComponent],
  selector: 'app-root',
  template: `
    <p-checkbox [stateless]="true" [checked]="checked" (change)="onStateChange($event)">Stateless Checkbox</p-checkbox>
  `
})
export class MyComponent {
  
  public checked = false;

  private http = inject(HttpClient);
  private cd = inject(ChangeDetectorRef);
  
  onStateChange(change: PrettyCheckBoxChange) {
    this.http.post(...).subscribe(_ => {
      this.checked = true;
      this.cd.detectChanges();
    })
  }
}
```
## More demos and document

There are more features like  ***Radio buttons*** , ***Toggle*** , ***States*** , ***Animations*** , ***Border less*** , ***Lock*** , ***Scale***, ***SCSS Settings***.

Please refer the [documentation](https://miladfm.github.io/ngx-pretty-checkbox/) to know about them.

<br><br>

### Browser support

Works in all modern browsers.

`Chrome >= 26` `Firefox >= 16` `Safari >= 6.1` `Opera >= 15` `IE >= 9`

### License
This project is licensed under the MIT License. Copyright (c) milad faghihi.