import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupApiComponent } from './radio-group-api.component';

describe('RadioGroupApiComponent', () => {
  let component: RadioGroupApiComponent;
  let fixture: ComponentFixture<RadioGroupApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioGroupApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
