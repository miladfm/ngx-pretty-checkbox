import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSvgComponent } from './demo-svg.component';

describe('DemoSvgComponent', () => {
  let component: DemoSvgComponent;
  let fixture: ComponentFixture<DemoSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
