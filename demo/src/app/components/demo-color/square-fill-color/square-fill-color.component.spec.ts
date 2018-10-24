import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareFillColorComponent } from './square-fill-color.component';

describe('SquareFillColorComponent', () => {
  let component: SquareFillColorComponent;
  let fixture: ComponentFixture<SquareFillColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareFillColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareFillColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
