import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPlainComponent } from './demo-plain.component';

describe('DemoPlainComponent', () => {
  let component: DemoPlainComponent;
  let fixture: ComponentFixture<DemoPlainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPlainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
