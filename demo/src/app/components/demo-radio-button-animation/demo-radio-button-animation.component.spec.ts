import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRadioButtonAnimationComponent } from './demo-radio-button-animation.component';

describe('DemoRadioButtonAnimationComponent', () => {
  let component: DemoRadioButtonAnimationComponent;
  let fixture: ComponentFixture<DemoRadioButtonAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRadioButtonAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRadioButtonAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
