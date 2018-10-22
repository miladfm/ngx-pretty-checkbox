import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pImage], [p-image]'
})
export class NgxPrettyImageDirective {

  constructor(private elemRef: ElementRef) {
    console.log('TCL: NgxPrettyImageDirective -> constructor -> elemRef', elemRef);
    this.elemRef.nativeElement.classList.add('image');
  }

}
