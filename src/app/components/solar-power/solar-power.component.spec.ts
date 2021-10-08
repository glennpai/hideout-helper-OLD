import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarPowerComponent } from './solar-power.component';

describe('SolarPowerComponent', () => {
  let component: SolarPowerComponent;
  let fixture: ComponentFixture<SolarPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarPowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
