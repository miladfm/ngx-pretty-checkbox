import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAnimationPulseComponent } from './demo-animation-pulse.component';

describe('DemoAnimationPulseComponent', () => {
  let component: DemoAnimationPulseComponent;
  let fixture: ComponentFixture<DemoAnimationPulseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAnimationPulseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAnimationPulseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
