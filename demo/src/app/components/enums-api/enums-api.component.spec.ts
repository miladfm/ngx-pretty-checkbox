/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnumsApiComponent } from './enums-api.component';

describe('CheckboxApiComponent', () => {
  let component: EnumsApiComponent;
  let fixture: ComponentFixture<EnumsApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnumsApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
