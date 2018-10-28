import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAnimationRotateComponent } from './demo-animation-rotate.component';

describe('DemoAnimationRotateComponent', () => {
  let component: DemoAnimationRotateComponent;
  let fixture: ComponentFixture<DemoAnimationRotateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAnimationRotateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAnimationRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
