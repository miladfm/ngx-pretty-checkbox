import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioApiComponent } from './radio-api.component';

describe('RadioApiComponent', () => {
  let component: RadioApiComponent;
  let fixture: ComponentFixture<RadioApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
