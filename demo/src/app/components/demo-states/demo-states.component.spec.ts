import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoStatesComponent } from './demo-states.component';

describe('DemoStatesComponent', () => {
  let component: DemoStatesComponent;
  let fixture: ComponentFixture<DemoStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
