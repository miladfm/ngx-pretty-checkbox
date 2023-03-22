import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pImage], [p-image]',
  standalone: true
})
export class NgxPrettyImageDirective {

  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.classList.add('image');
  }

}
