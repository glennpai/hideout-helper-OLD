import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AirFilteringUnitComponent } from './components/air-filtering-unit/air-filtering-unit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(AirFilteringUnitComponent) airFilteringUnit!: AirFilteringUnitComponent;
    
  constructor( ) { }

  title = 'hideout-helper';

  level = 1;
  
  ngAfterViewInit() {
    this.level = this.airFilteringUnit.level;
  }

  // true ++ 
  // false --
  updateLevel(mod: boolean) {
    if(mod) {
      this.level = this.airFilteringUnit.levelUp();
    } else {
      this.level = this.airFilteringUnit.levelDown();
    }
  }
}