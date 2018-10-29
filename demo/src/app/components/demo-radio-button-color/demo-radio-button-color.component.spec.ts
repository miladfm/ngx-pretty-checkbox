import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRadioButtonColorComponent } from './demo-radio-button-color.component';

describe('DemoRadioButtonColorComponent', () => {
  let component: DemoRadioButtonColorComponent;
  let fixture: ComponentFixture<DemoRadioButtonColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRadioButtonColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRadioButtonColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
