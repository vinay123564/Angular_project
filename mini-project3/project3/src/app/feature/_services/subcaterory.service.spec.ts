import { TestBed } from '@angular/core/testing';

import { SubcateroryService } from './subcaterory.service';

describe('SubcateroryService', () => {
  let service: SubcateroryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcateroryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
