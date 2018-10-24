import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFontIconComponent } from './demo-font-icon.component';

describe('DemoFontIconComponent', () => {
  let component: DemoFontIconComponent;
  let fixture: ComponentFixture<DemoFontIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFontIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFontIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
