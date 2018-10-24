import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveColorComponent } from './curve-color.component';

describe('CurveColorComponent', () => {
  let component: CurveColorComponent;
  let fixture: ComponentFixture<CurveColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
