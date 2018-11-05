import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAnimationComponent } from './demo-animation.component';

describe('DemoAnimationComponent', () => {
  let component: DemoAnimationComponent;
  let fixture: ComponentFixture<DemoAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
