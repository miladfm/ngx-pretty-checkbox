import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundFillColorComponent } from './round-fill-color.component';

describe('RoundFillColorComponent', () => {
  let component: RoundFillColorComponent;
  let fixture: ComponentFixture<RoundFillColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundFillColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundFillColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
