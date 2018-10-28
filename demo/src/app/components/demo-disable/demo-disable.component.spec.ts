import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDisableComponent } from './demo-disable.component';

describe('DemoDisableComponent', () => {
  let component: DemoDisableComponent;
  let fixture: ComponentFixture<DemoDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
