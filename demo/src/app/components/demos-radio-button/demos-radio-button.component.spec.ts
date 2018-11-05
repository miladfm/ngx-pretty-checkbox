import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosRadioButtonComponent } from './demos-radio-button.component';

describe('DemosRadioButtonComponent', () => {
  let component: DemosRadioButtonComponent;
  let fixture: ComponentFixture<DemosRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemosRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
