import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSizeComponent } from './demo-size.component';

describe('DemoSizeComponent', () => {
  let component: DemoSizeComponent;
  let fixture: ComponentFixture<DemoSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
