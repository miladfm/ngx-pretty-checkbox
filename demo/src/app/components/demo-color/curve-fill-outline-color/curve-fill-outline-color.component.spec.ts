import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveFillOutlineColorComponent } from './curve-fill-outline-color.component';

describe('CurveFillOutlineColorComponent', () => {
  let component: CurveFillOutlineColorComponent;
  let fixture: ComponentFixture<CurveFillOutlineColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveFillOutlineColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveFillOutlineColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
