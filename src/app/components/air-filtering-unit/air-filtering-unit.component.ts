import { Component } from '@angular/core';
import { Components } from 'src/app/services/hideout-reqs.service';
import { Items } from 'src/app/services/item-reqs.service';
import { Requirements } from 'src/app/services/level.service';
import { Skills } from 'src/app/services/skill-reqs.service';
import { Traders } from 'src/app/services/trader-reqs.service';

@Component({
  selector: 'app-air-filtering-unit',
  templateUrl: './air-filtering-unit.component.html',
  styleUrls: ['./air-filtering-unit.component.css']
})

export class AirFilteringUnitComponent {

  constructor( ) { }

  level: number = 1;

  maxLevel: number = 1;

  levelOne: Requirements = {
    itemReq: [
      {type: Items.aFilter, amount: 5}, 
      {type: Items.usd, amount: 25000},
      {type: Items.pFilter, amount: 4},
    ],
    traderReq: [
      {trader: Traders.skier, level: 3}
    ],
    skillReq: [],
    hideoutReq: [
      {component: Components.generator, level: 3},
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