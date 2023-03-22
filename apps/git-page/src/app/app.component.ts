import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import { RoutePath } from './app-routes-path';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public readonly RoutePath = RoutePath;

  public isAccordingInstallOpen = true;
  public isAccordingDemoCheckboxOpen = false;
  public isAccordingDemoCheckboxMixedOpen = false;
  public isAccordingDemoCheckboxAnimationOpen = false;
  public isAccordingDemoRadioOpen = false;
  public isAccordingApiOpen = false;

  @ViewChild('installAccordingElem', { static: true }) installAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('demoCheckboxAccordingElem', { static: true }) demoCheckboxAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('demoCheckboxMixedAccordingElem', { static: true }) demoCheckboxMixedAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('demoCheckboxAnimationAccordingElem', { static: true }) demoCheckboxAnimationAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('demoRadioAccordingElem', { static: true }) demoRadioAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('apiAccordingElem', { static: true }) apiAccordingElem: ElementRef<HTMLElement>;

  constructor(private navigation: NavigationService) {}

  ngOnInit() {
    this.updateAccordingLayout(this.isAccordingInstallOpen, this.installAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingDemoCheckboxOpen, this.demoCheckboxAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingDemoCheckboxMixedOpen, this.demoCheckboxMixedAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingDemoCheckboxAnimationOpen, this.demoCheckboxAnimationAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingDemoRadioOpen, this.demoRadioAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingApiOpen, this.apiAccordingElem.nativeElement, false);
  }

  onDemosCheckboxClick() {
    this.toggleDemosCheckboxAccording();
  }

  onDemoCheckboxAnimationClick() {
    this.toggleDemoCheckboxAnimationAccording();
  }

  onDemoRadioClick() {
    this.toggleDemoRadioAccording();
  }

  toggleDemoCheckboxMixedAccording() {
    this.isAccordingDemoCheckboxMixedOpen = !this.isAccordingDemoCheckboxMixedOpen;
    this.updateAccordingLayout(this.isAccordingDemoCheckboxMixedOpen, this.demoCheckboxMixedAccordingElem.nativeElement);
  }

  toggleDemoCheckboxAnimationAccording() {
    this.isAccordingDemoCheckboxAnimationOpen = !this.isAccordingDemoCheckboxAnimationOpen;
    this.updateAccordingLayout(this.isAccordingDemoCheckboxAnimationOpen, this.demoCheckboxAnimationAccordingElem.nativeElement);
  }

  toggleDemoRadioAccording() {
    this.isAccordingDemoRadioOpen = !this.isAccordingDemoRadioOpen;
    this.updateAccordingLayout(this.isAccordingDemoRadioOpen, this.demoRadioAccordingElem.nativeElement);
  }

  toggleInstallAccording() {
    this.isAccordingInstallOpen = !this.isAccordingInstallOpen;
    this.updateAccordingLayout(this.isAccordingInstallOpen, this.installAccordingElem.nativeElement);
  }

  toggleDemosCheckboxAccording() {
    this.isAccordingDemoCheckboxOpen = !this.isAccordingDemoCheckboxOpen;
    this.updateAccordingLayout(this.isAccordingDemoCheckboxOpen, this.demoCheckboxAccordingElem.nativeElement);
  }

  toggleApiAccording() {
    this.isAccordingApiOpen = !this.isAccordingApiOpen;
    this.updateAccordingLayout(this.isAccordingApiOpen, this.apiAccordingElem.nativeElement);
  }

  onTransitionEnd(isAccordingOpen: boolean, elem: HTMLElement) {
    if (isAccordingOpen) {
      elem.style.height = null;
    }
  }


  private updateAccordingLayout(isOpen: boolean, accordingElem: HTMLElement, closeWithAnimation = true) {
    if (isOpen) {
      accordingElem.style.height = accordingElem.scrollHeight + 'px';

    } else {
      if (closeWithAnimation) {
        accordingElem.style.height = accordingElem.scrollHeight + 'px';
      }
      setTimeout(() => { accordingElem.style.height = 0 + 'px'; });
    }
  }
}