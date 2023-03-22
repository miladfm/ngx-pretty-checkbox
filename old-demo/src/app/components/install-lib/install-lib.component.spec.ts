import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InstallLibComponent } from './install-lib.component';

describe('InstallLibComponent', () => {
  let component: InstallLibComponent;
  let fixture: ComponentFixture<InstallLibComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
