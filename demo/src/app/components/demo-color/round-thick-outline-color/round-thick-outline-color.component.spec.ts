import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundThickOutlineColorComponent } from './round-thick-outline-color.component';

describe('RoundThickOutlineColorComponent', () => {
  let component: RoundThickOutlineColorComponent;
  let fixture: ComponentFixture<RoundThickOutlineColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundThickOutlineColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundThickOutlineColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
