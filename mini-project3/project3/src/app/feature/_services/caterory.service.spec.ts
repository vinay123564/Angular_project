import { TestBed } from '@angular/core/testing';

import { CateroryService } from './caterory.service';

describe('CateroryService', () => {
  let service: CateroryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CateroryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
