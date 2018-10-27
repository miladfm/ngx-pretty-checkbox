import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiToggleComponent } from './api-toggle.component';

describe('ApiToggleComponent', () => {
  let component: ApiToggleComponent;
  let fixture: ComponentFixture<ApiToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
