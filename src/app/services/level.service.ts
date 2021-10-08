import { Injectable } from '@angular/core';
import { HideoutRequirement } from './hideout-reqs.service';
import { ItemRequirement } from './item-reqs.service';
import { SkillRequirement } from './skill-reqs.service';
import { TraderRequirement } from './trader-reqs.service';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor() { }
}

export interface Requirements {
  itemReq: ItemRequirement[],
  traderReq: TraderRequirement[],
  skillReq: SkillRequirement[],
  hideoutReq: HideoutRequirement[]
}