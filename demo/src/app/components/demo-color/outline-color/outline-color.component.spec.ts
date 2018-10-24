import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlineColorComponent } from './outline-color.component';

describe('OutlineColorComponent', () => {
  let component: OutlineColorComponent;
  let fixture: ComponentFixture<OutlineColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlineColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlineColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
