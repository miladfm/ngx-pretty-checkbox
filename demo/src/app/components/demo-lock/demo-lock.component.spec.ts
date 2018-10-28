import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLockComponent } from './demo-lock.component';

describe('DemoLockComponent', () => {
  let component: DemoLockComponent;
  let fixture: ComponentFixture<DemoLockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
