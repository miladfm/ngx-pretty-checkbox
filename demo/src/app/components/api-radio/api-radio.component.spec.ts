import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRadioComponent } from './radio-api.component';

describe('RadioApiComponent', () => {
  let component: ApiRadioComponent;
  let fixture: ComponentFixture<ApiRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
