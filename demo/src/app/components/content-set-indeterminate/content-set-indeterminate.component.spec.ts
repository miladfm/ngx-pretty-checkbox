import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSetIndeterminateComponent } from './content-set-indeterminate.component';

describe('ContentSetIndeterminateComponent', () => {
  let component: ContentSetIndeterminateComponent;
  let fixture: ComponentFixture<ContentSetIndeterminateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSetIndeterminateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSetIndeterminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
