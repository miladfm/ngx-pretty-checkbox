import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DemoCheckboxesRouteName, ApiRouteName, InstallRouteName, DemoRadioRouteName } from './models/enums';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  public readonly DemoCheckboxesRouteName = DemoCheckboxesRouteName;
  public readonly DemoRadioRouteName = DemoRadioRouteName;
  public readonly ApiRouteName = ApiRouteName;
  public readonly InstallRouteName = InstallRouteName;

  public isAccordingInstallOpen = true;
  public isAccordingDemoCheckboxOpen = false;
  public isAccordingDemoCheckboxMixedOpen = false;
  public isAccordingDemoCheckboxAnimationOpen = false;
  public isAccordingDemoRadioOpen = false;
  public isAccordingApiOpen = false;

  @ViewChild('installAccordingElem') installAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('demoCheckboxAccordingElem') demoCheckboxAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('demoCheckboxMixedAccordingElem') demoCheckboxMixedAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('demoCheckboxAnimationAccordingElem') demoCheckboxAnimationAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('demoRadioAccordingElem') demoRadioAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('apiAccordingElem') apiAccordingElem: ElementRef<HTMLElement>;

  constructor(private navigation: NavigationService) {}

  ngOnInit() {
    this.updateAccordingLayout(this.isAccordingInstallOpen, this.installAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingDemoCheckboxOpen, this.demoCheckboxAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingDemoCheckboxMixedOpen, this.demoCheckboxMixedAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingDemoCheckboxAnimationOpen, this.demoCheckboxAnimationAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingDemoRadioOpen, this.demoRadioAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingApiOpen, this.apiAccordingElem.nativeElement, false);
  }

  goToDemoCheckbox(page?: DemoCheckboxesRouteName) {
    this.navigation.goToDemoCheckbox(page);
  }

  goToDemoRadio(page?: DemoRadioRouteName) {
    this.navigation.goToDemoRadio(page);
  }

  goToInstall(page?: InstallRouteName) {
    this.navigation.goToInstall(page);
  }

  goToApi(page?: ApiRouteName) {
    this.navigation.goToApi(page);
  }

  onDemosCheckboxClick() {
    this.toggleDemosCheckboxAccording();
    this.goToDemoCheckbox();
  }

  onDemoCheckboxAnimationClick() {
    this.toggleDemoCheckboxAnimationAccording();
    this.goToDemoCheckbox(DemoCheckboxesRouteName.Animations);
  }

  onDemoRadioClick() {
    this.toggleDemoRadioAccording();
    this.goToDemoRadio();
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
