import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallScssCustomizeComponent } from './install-scss-customize.component';

describe('InstallScssCustomizeComponent', () => {
  let component: InstallScssCustomizeComponent;
  let fixture: ComponentFixture<InstallScssCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallScssCustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallScssCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
