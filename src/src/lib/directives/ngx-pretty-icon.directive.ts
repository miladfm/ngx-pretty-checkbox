import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pIcon], [p-icon]'
})
export class NgxPrettyIconDirective {

  constructor(private elemRef: ElementRef) {
    this.elemRef.nativeElement.classList.add('icon');
  }

}
