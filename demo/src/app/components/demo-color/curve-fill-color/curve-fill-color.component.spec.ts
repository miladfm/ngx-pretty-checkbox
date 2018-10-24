import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveFillColorComponent } from './curve-fill-color.component';

describe('CurveFillColorComponent', () => {
  let component: CurveFillColorComponent;
  let fixture: ComponentFixture<CurveFillColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveFillColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveFillColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
