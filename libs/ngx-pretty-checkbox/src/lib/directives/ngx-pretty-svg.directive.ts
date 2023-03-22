import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[pSvg], [p-svg]',
  standalone: true
})
export class NgxPrettySvgDirective implements AfterViewInit {

  constructor(private elemRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.elemRef.nativeElement.classList.add('svg');
  }

}
