import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundColorComponent } from './round-color.component';

describe('RoundColorComponent', () => {
  let component: RoundColorComponent;
  let fixture: ComponentFixture<RoundColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
