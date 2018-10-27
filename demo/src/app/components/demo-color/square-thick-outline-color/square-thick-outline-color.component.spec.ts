import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareThickOutlineColorComponent } from './square-thick-outline-color.component';

describe('SquareThickOutlineColorComponent', () => {
  let component: SquareThickOutlineColorComponent;
  let fixture: ComponentFixture<SquareThickOutlineColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareThickOutlineColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareThickOutlineColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
