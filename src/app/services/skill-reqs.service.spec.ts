import { TestBed } from '@angular/core/testing';

import { SkillReqsService } from './skill-reqs.service';

describe('SkillReqsService', () => {
  let service: SkillReqsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillReqsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
