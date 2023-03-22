import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApiToggleWillChangeComponent } from './api-toggle-will-change.component';

describe('ApiToggleWillChangeComponent', () => {
  let component: ApiToggleWillChangeComponent;
  let fixture: ComponentFixture<ApiToggleWillChangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiToggleWillChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiToggleWillChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
