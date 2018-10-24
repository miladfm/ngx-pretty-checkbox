import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedColorComponent } from './mixed-color.component';

describe('MixedColorComponent', () => {
  let component: MixedColorComponent;
  let fixture: ComponentFixture<MixedColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
