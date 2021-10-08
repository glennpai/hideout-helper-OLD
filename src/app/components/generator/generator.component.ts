import { Component } from '@angular/core';
import { Components } from 'src/app/services/hideout-reqs.service';
import { Items } from 'src/app/services/item-reqs.service';
import { Requirements } from 'src/app/services/level.service';
import { Skills } from 'src/app/services/skill-reqs.service';
import { Traders } from 'src/app/services/trader-reqs.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent {

  constructor() { }

  level: number = 1;

  maxLevel: number = 3;

  levelOne: Requirements = {
    itemReq: [
      {type: Items.sparkPlug, amount: 1}, 
      {type: Items.roubles, amount: 100000}
    ],
    traderReq: [],
    skillReq: [],
    hideoutReq: [
      {component: Components.security, level: 1}
    ]
  } 

  levelTwo: Requirements = {
    itemReq: [
      {type: Items.relay, amount: 5}, 
      {type: Items.eMotor, amount: 1},
      {type: Items.wires, amount: 15},
    ],
    traderReq: [],
    skillReq: [],
    hideoutReq: [
      {component: Components.security, level: 2},
      {component: Components.vents, level: 2}

    ]
  } 

  levelThree: Requirements = {
    itemReq: [
      {type: Items.psu, amount: 5}, 
      {type: Items.relay, amount: 6},
      {type: Items.eMotor, amount: 3},
      {type: Items.sparkPlug, amount: 10}
    ],
    traderReq: [
      {trader: Traders.mechanic, level: 3}
    ],
    skillReq: [],
    hideoutReq: [
      {component: Components.security, level: 3},
      {component: Components.vents, level: 3}
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
