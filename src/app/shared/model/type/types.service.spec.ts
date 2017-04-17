import { TestBed, inject } from '@angular/core/testing';

import { TypesService } from './types.service';

describe('PhoneTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypesService]
    });
  });

  it('should ...', inject([TypesService], (service: TypesService) => {
    expect(service).toBeTruthy();
  }));
});
