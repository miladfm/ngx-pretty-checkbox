import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareThickColorComponent } from './square-thick-color.component';

describe('SquareThickColorComponent', () => {
  let component: SquareThickColorComponent;
  let fixture: ComponentFixture<SquareThickColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareThickColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareThickColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
