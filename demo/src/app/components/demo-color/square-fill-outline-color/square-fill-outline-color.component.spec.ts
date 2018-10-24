import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareFillOutlineColorComponent } from './square-fill-outline-color.component';

describe('SquareFillOutlineColorComponent', () => {
  let component: SquareFillOutlineColorComponent;
  let fixture: ComponentFixture<SquareFillOutlineColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareFillOutlineColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareFillOutlineColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
