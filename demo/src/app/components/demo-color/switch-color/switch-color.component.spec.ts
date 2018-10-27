import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchColorComponent } from './switch-color.component';

describe('SwitchColorComponent', () => {
  let component: SwitchColorComponent;
  let fixture: ComponentFixture<SwitchColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
