import { Component } from '@angular/core';
import { Components } from 'src/app/services/hideout-reqs.service';
import { Items } from 'src/app/services/item-reqs.service';
import { Requirements } from 'src/app/services/level.service';
import { Skills } from 'src/app/services/skill-reqs.service';
import { Traders } from 'src/app/services/trader-reqs.service';

@Component({
  selector: 'app-heating',
  templateUrl: './heating.component.html',
  styleUrls: ['./heating.component.css']
})
export class HeatingComponent {

  constructor() { }

  level: number = 1;

  maxLevel: number = 3;

  levelOne: Requirements = {
    itemReq: [
      {type: Items.roubles, amount: 25000}, 
      {type: Items.matches, amount: 2}
    ],
    traderReq: [],
    skillReq: [],
    hideoutReq: []
  } 

  levelTwo: Requirements = {
    itemReq: [
      {type: Items.roubles, amount: 50000}, 
      {type: Items.dFuel, amount: 3},
      {type: Items.hMatches, amount: 2},
    ],
    traderReq: [],
    skillReq: [
      {skill: Skills.endurance, level: 1}
    ],
    hideoutReq: [
      {component: Components.vents, level: 1}
    ]
  } 

  levelThree: Requirements = {
    itemReq: [
      {type: Items.helix, amount: 8}, 
      {type: Items.wires, amount: 8},
      {type: Items.relay, amount: 4},
    ],
    traderReq: [
      {trader: Traders.ragman, level: 2}
    ],
    skillReq: [],
    hideoutReq: [
      {component: Components.generator, level: 2},
      {component: Components.workbench, level: 2}
    ]
  } 

  levelUp(): number {
    if (this.level < this.maxLevel) {
      this.level+=1;
    }
    return this.level;
  }

  levelDown(): number {
    if (this.level > 1) {
      this.level-=1;
    }
    return this.level;
  }

}
