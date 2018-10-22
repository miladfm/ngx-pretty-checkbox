import { TestBed, inject } from '@angular/core/testing';

import { NgxPrettyCheckboxService } from './ngx-pretty-checkbox.service';

describe('NgxPrettyCheckboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxPrettyCheckboxService]
    });
  });

  it('should be created', inject([NgxPrettyCheckboxService], (service: NgxPrettyCheckboxService) => {
    expect(service).toBeTruthy();
  }));
});
