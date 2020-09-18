import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiIconComponent } from './api-icon.component';

describe('ApiIconComponent', () => {
  let component: ApiIconComponent;
  let fixture: ComponentFixture<ApiIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
