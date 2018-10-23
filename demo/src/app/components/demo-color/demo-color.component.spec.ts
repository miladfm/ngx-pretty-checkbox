import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoColorComponent } from './demo-color.component';

describe('DemoColorComponent', () => {
  let component: DemoColorComponent;
  let fixture: ComponentFixture<DemoColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
