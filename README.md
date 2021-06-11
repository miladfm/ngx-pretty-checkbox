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


### Dependencies

Latest version available for each version of Angular

| ngx-pretty-checkbox | angular |
|--|--|
| 11.0.0 | 11.x |
| 1.2.0 | >10.x (ivy) |
| 1.1.0 | >8.x |
| 1.0.4 | 6.x 7.x 

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

Add ngx-pretty-checkbox in your AppModule
```sh
import { NgxPrettyCheckboxModule } from 'ngx-pretty-checkbox';

@NgModule({
  declarations: [ ... ],
  imports: [
    ...,
    NgxPrettyCheckboxModule
  ],
  providers: [ ... ],
  bootstrap: [ ... ]
})
export class AppModule { 
  ...
}
```
<br>

- **Step 5**  

Use it in your angular application
```sh
<p-checkbox>
  Default
</p-checkbox>
```
<br><br><br>
## More demos and document

There are more features like  ***Radio buttons*** , ***Toggle*** , ***States*** , ***Animations*** , ***Border less*** , ***Lock*** , ***Scale***, ***SCSS Settings***. 

Please refer the [documentation](https://miladfm.github.io/ngx-pretty-checkbox/) to know about them.

<br><br>

### Browser support

Works in all modern browsers.

`Chrome >= 26` `Firefox >= 16` `Safari >= 6.1` `Opera >= 15` `IE >= 9`

### License
This project is licensed under the MIT License. Copyright (c) milad faghihi.
