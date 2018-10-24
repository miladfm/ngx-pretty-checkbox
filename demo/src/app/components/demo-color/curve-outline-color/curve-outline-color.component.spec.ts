import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurveOutlineColorComponent } from './curve-outline-color.component';

describe('CurveOutlineColorComponent', () => {
  let component: CurveOutlineColorComponent;
  let fixture: ComponentFixture<CurveOutlineColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurveOutlineColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurveOutlineColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
