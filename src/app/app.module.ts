import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { AirFilteringUnitComponent } from './components/air-filtering-unit/air-filtering-unit.component';
import { BitcoinFarmComponent } from './components/bitcoin-farm/bitcoin-farm.component';
import { BoozeGeneratorComponent } from './components/booze-generator/booze-generator.component';
import { GeneratorComponent } from './components/generator/generator.component';
import { HeatingComponent } from './components/heating/heating.component';
import { IlluminationComponent } from './components/illumination/illumination.component';
import { IntelligenceComponent } from './components/intelligence/intelligence.component';
import { LavatoryComponent } from './components/lavatory/lavatory.component';
import { LibraryComponent } from './components/library/library.component';
import { MedstationComponent } from './components/medstation/medstation.component';
import { NutritionUnitComponent } from './components/nutrition-unit/nutrition-unit.component';
import { RestSpaceComponent } from './components/rest-space/rest-space.component';
import { ScavCaseComponent } from './components/scav-case/scav-case.component';
import { SecurityComponent } from './components/security/security.component';
import { ShootingRangeComponent } from './components/shooting-range/shooting-range.component';
import { SolarPowerComponent } from './components/solar-power/solar-power.component';
import { StashComponent } from './components/stash/stash.component';
import { VentsComponent } from './components/vents/vents.component';
import { WaterCollectorComponent } from './components/water-collector/water-collector.component';
import { WorkbenchComponent } from './components/workbench/workbench.component';

@NgModule({
  declarations: [
    AppComponent,
    AirFilteringUnitComponent,
    BitcoinFarmComponent,
    BoozeGeneratorComponent,
    GeneratorComponent,
    HeatingComponent,
    IlluminationComponent,
    IntelligenceComponent,
    LavatoryComponent,
    LibraryComponent,
    MedstationComponent,
    NutritionUnitComponent,
    RestSpaceComponent,
    ScavCaseComponent,
    SecurityComponent,
    ShootingRangeComponent,
    SolarPowerComponent,
    StashComponent,
    VentsComponent,
    WaterCollectorComponent,
    WorkbenchComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule
  ],
  providers: [
    AppComponent,
    AirFilteringUnitComponent,
    BitcoinFarmComponent,
    BoozeGeneratorComponent,
    GeneratorComponent,
    HeatingComponent,
    IlluminationComponent,
    IntelligenceComponent,
    LavatoryComponent,
    LibraryComponent,
    MedstationComponent,
    NutritionUnitComponent,
    RestSpaceComponent,
    ScavCaseComponent,
    SecurityComponent,
    ShootingRangeComponent,
    SolarPowerComponent,
    StashComponent,
    VentsComponent,
    WaterCollectorComponent,
    WorkbenchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
