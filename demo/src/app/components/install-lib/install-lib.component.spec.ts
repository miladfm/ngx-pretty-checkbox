import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallLibComponent } from './install-lib.component';

describe('InstallLibComponent', () => {
  let component: InstallLibComponent;
  let fixture: ComponentFixture<InstallLibComponent>;

  beforeEach(async(() => {
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
