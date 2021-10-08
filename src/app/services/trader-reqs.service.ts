import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraderReqsService {

  constructor() { }
}

export enum Traders {
  prapor = 'Prapor',
  therapist = 'Therapist',
  fence = 'Fence',
  skier = 'Skier',
  peacekeeper = 'Peacekeeper',
  mechanic = 'Mechanic',
  ragman = 'Ragman',
  jaeger = 'Jaeger'
}

export interface TraderRequirement {
  trader: Traders;
  level: number;
}
