import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DemoRouteName, ApiRouteName, InstallRouteName } from './models/enums';
import { NavigationService } from './services/navigation.service';
import { AotCompiler } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  public readonly DemoRouteName = DemoRouteName;
  public readonly ApiRouteName = ApiRouteName;
  public readonly InstallRouteName = InstallRouteName;

  public isAccordingInstallOpen = true;
  public isAccordingDemosOpen = false;
  public isAccordingMixedOpen = false;
  public isAccordingAnimationOpen = false;
  public isAccordingApiOpen = false;

  @ViewChild('installAccordingElem') installAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('demosAccordingElem') demosAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('mixedAccordingElem') mixedAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('animationAccordingElem') animationAccordingElem: ElementRef<HTMLElement>;
  @ViewChild('apiAccordingElem') apiAccordingElem: ElementRef<HTMLElement>;

  constructor(private navigation: NavigationService) {}

  ngOnInit() {
    this.updateAccordingLayout(this.isAccordingInstallOpen, this.installAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingDemosOpen, this.demosAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingMixedOpen, this.mixedAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingAnimationOpen, this.animationAccordingElem.nativeElement, false);
    this.updateAccordingLayout(this.isAccordingApiOpen, this.apiAccordingElem.nativeElement, false);
  }

  goToDemo(page?: DemoRouteName) {
    this.navigation.goToDemo(page);
  }

  goToInstall(page?: InstallRouteName) {
    this.navigation.goToInstall(page);
  }

  goToApi(page?: ApiRouteName) {
    this.navigation.goToApi(page);
  }

  onDemosClick() {
    this.toggleDemosAccording();
    this.goToDemo();
  }

  onAnimationClick() {
    this.toggleAnimationAccording();
    this.goToDemo(DemoRouteName.Animations);
  }

  toggleMixedAccording() {
    this.isAccordingMixedOpen = !this.isAccordingMixedOpen;
    this.updateAccordingLayout(this.isAccordingMixedOpen, this.mixedAccordingElem.nativeElement);
  }

  toggleAnimationAccording() {
    this.isAccordingAnimationOpen = !this.isAccordingAnimationOpen;
    this.updateAccordingLayout(this.isAccordingAnimationOpen, this.animationAccordingElem.nativeElement);
  }

  toggleInstallAccording() {
    this.isAccordingInstallOpen = !this.isAccordingInstallOpen;
    this.updateAccordingLayout(this.isAccordingInstallOpen, this.installAccordingElem.nativeElement);
  }

  toggleDemosAccording() {
    this.isAccordingDemosOpen = !this.isAccordingDemosOpen;
    this.updateAccordingLayout(this.isAccordingDemosOpen, this.demosAccordingElem.nativeElement);
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
