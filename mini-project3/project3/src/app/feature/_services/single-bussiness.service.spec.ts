import { TestBed } from '@angular/core/testing';

import { SingleBussinessService } from './single-bussiness.service';

describe('SingleBussinessService', () => {
  let service: SingleBussinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleBussinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
