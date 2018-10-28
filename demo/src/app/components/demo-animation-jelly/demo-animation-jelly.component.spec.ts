import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAnimationJellyComponent } from './demo-animation-jelly.component';

describe('DemoAnimationJellyComponent', () => {
  let component: DemoAnimationJellyComponent;
  let fixture: ComponentFixture<DemoAnimationJellyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAnimationJellyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAnimationJellyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
