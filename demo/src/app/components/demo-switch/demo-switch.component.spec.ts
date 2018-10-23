import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSwitchComponent } from './demo-switch.component';

describe('DemoSwitchComponent', () => {
  let component: DemoSwitchComponent;
  let fixture: ComponentFixture<DemoSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
