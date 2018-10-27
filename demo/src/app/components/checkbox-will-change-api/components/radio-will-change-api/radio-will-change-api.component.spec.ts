import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioWillChangeApiComponent } from './radio-will-change-api.component';

describe('RadioWillChangeApiComponent', () => {
  let component: RadioWillChangeApiComponent;
  let fixture: ComponentFixture<RadioWillChangeApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioWillChangeApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioWillChangeApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
