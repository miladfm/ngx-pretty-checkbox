import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAnimationTadaComponent } from './demo-animation-tada.component';

describe('DemoAnimationTadaComponent', () => {
  let component: DemoAnimationTadaComponent;
  let fixture: ComponentFixture<DemoAnimationTadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoAnimationTadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAnimationTadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
