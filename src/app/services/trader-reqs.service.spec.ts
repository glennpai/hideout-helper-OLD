import { TestBed } from '@angular/core/testing';

import { TraderReqsService } from './trader-reqs.service';

describe('TraderReqsService', () => {
  let service: TraderReqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraderReqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
