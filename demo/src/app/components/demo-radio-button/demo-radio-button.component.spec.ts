import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRadioButtonComponent } from './demo-radio-button.component';

describe('DemoRadioButtonComponent', () => {
  let component: DemoRadioButtonComponent;
  let fixture: ComponentFixture<DemoRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
