import { Component } from '@angular/core';
import { Components } from 'src/app/services/hideout-reqs.service';
import { Items } from 'src/app/services/item-reqs.service';
import { Requirements } from 'src/app/services/level.service';
import { Skills } from 'src/app/services/skill-reqs.service';
import { Traders } from 'src/app/services/trader-reqs.service';

@Component({
  selector: 'app-booze-generator',
  templateUrl: './booze-generator.component.html',
  styleUrls: ['./booze-generator.component.css']
})

export class BoozeGeneratorComponent {

  constructor( ) { }

  level: number = 1;

  maxLevel: number = 1;

  levelOne: Requirements = {
    itemReq: [
      {type: Items.pGuage, amount: 2}, 
      {type: Items.tube, amount: 4},
      {type: Items.thermometer, amount: 2},
      {type: Items.hose, amount: 5}

    ],
    traderReq: [],
    skillReq: [],
    hideoutReq: [
      {component: Components.waterCollector, level: 3},
      {component: Components.nutritionUnit, level: 3}
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