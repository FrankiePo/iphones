import { TestBed, inject } from '@angular/core/testing';

import { PhoneTypesService } from './phone-types.service';

describe('PhoneTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhoneTypesService]
    });
  });

  it('should ...', inject([PhoneTypesService], (service: PhoneTypesService) => {
    expect(service).toBeTruthy();
  }));
});
