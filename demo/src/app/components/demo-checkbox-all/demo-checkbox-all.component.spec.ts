import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoCheckboxAllComponent } from './demo-checkbox-all.component';

describe('DemoCheckboxAllComponent', () => {
  let component: DemoCheckboxAllComponent;
  let fixture: ComponentFixture<DemoCheckboxAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoCheckboxAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoCheckboxAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
