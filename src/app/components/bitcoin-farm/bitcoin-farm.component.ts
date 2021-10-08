import { Component } from '@angular/core';
import { Components } from 'src/app/services/hideout-reqs.service';
import { Items } from 'src/app/services/item-reqs.service';
import { Requirements } from 'src/app/services/level.service';
import { Skills } from 'src/app/services/skill-reqs.service';
import { Traders } from 'src/app/services/trader-reqs.service';

@Component({
  selector: 'app-bitcoin-farm',
  templateUrl: './bitcoin-farm.component.html',
  styleUrls: ['./bitcoin-farm.component.css']
})
export class BitcoinFarmComponent {

  constructor() { }

  level: number = 1;

  maxLevel: number = 3;

  levelOne: Requirements = {
    itemReq: [
      {type: Items.eDrill, amount: 1}, 
      {type: Items.shus, amount: 10},
      {type: Items.psu, amount: 10},
      {type: Items.cpuFan, amount: 15}
    ],
    traderReq: [],
    skillReq: [],
    hideoutReq: [
      {component: Components.intelligence, level: 2}
    ]
  } 

  levelTwo: Requirements = {
    itemReq: [
      {type: Items.cpuFan, amount: 15}, 
      {type: Items.psu, amount: 10},
      {type: Items.pcb, amount: 15},
      {type: Items.relay, amount: 5}
    ],
    traderReq: [],
    skillReq: [],
    hideoutReq: [
      {component: Components.generator, level: 3}
    ]
  } 

  levelThree: Requirements = {
    itemReq: [
      {type: Items.cpuFan, amount: 25}, 
      {type: Items.tube, amount: 15},
      {type: Items.eMotor, amount: 10},
      {type: Items.pGuage, amount: 10}
    ],
    traderReq: [],
    skillReq: [],
    hideoutReq: [
      {component: Components.solarPower, level: 1},
      {component: Components.waterCollector, level: 3}
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
