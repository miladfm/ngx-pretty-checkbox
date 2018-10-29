import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRadioButtonSwitchComponent } from './demo-radio-button-switch.component';

describe('DemoRadioButtonSwitchComponent', () => {
  let component: DemoRadioButtonSwitchComponent;
  let fixture: ComponentFixture<DemoRadioButtonSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRadioButtonSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRadioButtonSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
