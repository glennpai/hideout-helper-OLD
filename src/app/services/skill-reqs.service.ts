import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillReqsService {

  constructor() { }
}

export enum Skills {
  endurance = 'Endurance',
  strength = 'Strength',
  vitality = 'Vitality',
  health = 'Health',
  attention = 'Attention',
  memory = 'Memory',
  metabolism = 'Metabolism'
}

export interface SkillRequirement {
  skill: Skills;
  level: number;
}