import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRadioButtonPlainComponent } from './demo-radio-button-plain.component';

describe('DemoRadioButtonPlainComponent', () => {
  let component: DemoRadioButtonPlainComponent;
  let fixture: ComponentFixture<DemoRadioButtonPlainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRadioButtonPlainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRadioButtonPlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
