import { TestBed } from '@angular/core/testing';

import { ItemReqsService } from './item-reqs.service';

describe('ItemReqsService', () => {
  let service: ItemReqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemReqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
