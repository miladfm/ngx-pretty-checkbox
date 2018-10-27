import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveThickOutlineColorComponent } from './curve-thick-outline-color.component';

describe('CurveThickOutlineColorComponent', () => {
  let component: CurveThickOutlineColorComponent;
  let fixture: ComponentFixture<CurveThickOutlineColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveThickOutlineColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveThickOutlineColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
