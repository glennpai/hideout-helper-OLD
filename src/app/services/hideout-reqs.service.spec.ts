import { TestBed } from '@angular/core/testing';

import { HideoutReqsService } from './hideout-reqs.service';

describe('HideoutReqsService', () => {
  let service: HideoutReqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideoutReqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
