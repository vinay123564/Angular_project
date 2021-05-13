import { TestBed } from '@angular/core/testing';

import { BussinessListingService } from './bussiness-listing.service';

describe('BussinessListingService', () => {
  let service: BussinessListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BussinessListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
