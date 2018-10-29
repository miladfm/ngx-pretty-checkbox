import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRadioButtonColorIconComponent } from './demo-radio-button-color-icon.component';

describe('DemoRadioButtonColorIconComponent', () => {
  let component: DemoRadioButtonColorIconComponent;
  let fixture: ComponentFixture<DemoRadioButtonColorIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRadioButtonColorIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRadioButtonColorIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
