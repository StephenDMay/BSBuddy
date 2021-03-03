import { TestBed } from '@angular/core/testing';

import { BsManagerService } from './bs-manager.service';

describe('BsManagerService', () => {
  let service: BsManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BsManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
