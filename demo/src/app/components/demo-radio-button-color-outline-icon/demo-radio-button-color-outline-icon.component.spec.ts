import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRadioButtonColorOutlineIconComponent } from './demo-radio-button-color-outline-icon.component';

describe('DemoRadioButtonColorOutlineIconComponent', () => {
  let component: DemoRadioButtonColorOutlineIconComponent;
  let fixture: ComponentFixture<DemoRadioButtonColorOutlineIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRadioButtonColorOutlineIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRadioButtonColorOutlineIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
