import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAnimationSmoothComponent } from './demo-animation-smooth.component';

describe('DemoAnimationSmoothComponent', () => {
  let component: DemoAnimationSmoothComponent;
  let fixture: ComponentFixture<DemoAnimationSmoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAnimationSmoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAnimationSmoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
