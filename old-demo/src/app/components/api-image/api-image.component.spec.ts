import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ApiImageComponent } from './api-image.component';

describe('ApiImageComponent', () => {
  let component: ApiImageComponent;
  let fixture: ComponentFixture<ApiImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
