import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundOutlineColorComponent } from './round-outline-color.component';

describe('RoundOutlineColorComponent', () => {
  let component: RoundOutlineColorComponent;
  let fixture: ComponentFixture<RoundOutlineColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundOutlineColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundOutlineColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
