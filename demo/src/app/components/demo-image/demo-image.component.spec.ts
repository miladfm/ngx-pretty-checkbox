import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoImageComponent } from './demo-image.component';

describe('DemoImageComponent', () => {
  let component: DemoImageComponent;
  let fixture: ComponentFixture<DemoImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
