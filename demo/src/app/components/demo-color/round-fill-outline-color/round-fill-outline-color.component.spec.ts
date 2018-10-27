import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundFillOutlineColorComponent } from './round-fill-outline-color.component';

describe('RoundFillOutlineColorComponent', () => {
  let component: RoundFillOutlineColorComponent;
  let fixture: ComponentFixture<RoundFillOutlineColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundFillOutlineColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundFillOutlineColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
