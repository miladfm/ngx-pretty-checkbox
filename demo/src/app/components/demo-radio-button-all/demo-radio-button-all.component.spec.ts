import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRadioButtonAllComponent } from './demo-radio-button-all.component';

describe('DemoRadioButtonAllComponent', () => {
  let component: DemoRadioButtonAllComponent;
  let fixture: ComponentFixture<DemoRadioButtonAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRadioButtonAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRadioButtonAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
