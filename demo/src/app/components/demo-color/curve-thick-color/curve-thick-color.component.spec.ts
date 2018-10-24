import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveThickColorComponent } from './curve-thick-color.component';

describe('CurveThickColorComponent', () => {
  let component: CurveThickColorComponent;
  let fixture: ComponentFixture<CurveThickColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveThickColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveThickColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
