import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundThickColorComponent } from './round-thick-color.component';

describe('RoundThickColorComponent', () => {
  let component: RoundThickColorComponent;
  let fixture: ComponentFixture<RoundThickColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundThickColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundThickColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
