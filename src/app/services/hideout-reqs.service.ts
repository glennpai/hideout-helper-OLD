import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HideoutReqsService {

  constructor() { }
}

export enum Components {
  airFilteringUnit = 'Air Filtering Unit',
  bitcoinFarm = 'Bitcoin Farm',
  boozeGenerator = 'Booze Generator',
  generator = 'Generator',
  heating = 'Heating',
  illumination = 'Illumination',
  intelligence = 'Intelligence Center',
  lavatory = 'Lavatory',
  library = 'Library', 
  medstation = 'Medstation', 
  nutritionUnit = 'Nutrition Unit',
  restSpace = 'Rest Space',
  scavCase = 'Scav Case',
  security = 'Security',
  shootingRange = 'Shooting Range',
  solarPower = 'Solar Power',
  stash = 'Stash',
  vents = 'Vents',
  waterCollector = 'Water Collector',
  workbench = 'Workbench'
}

export interface HideoutRequirement {
  component: Components;
  level: number;
}
