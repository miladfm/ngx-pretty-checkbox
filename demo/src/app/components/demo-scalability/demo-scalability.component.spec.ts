import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoScalabilityComponent } from './demo-scalability.component';

describe('DemoScalabilityComponent', () => {
  let component: DemoScalabilityComponent;
  let fixture: ComponentFixture<DemoScalabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoScalabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoScalabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
