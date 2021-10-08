import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFilteringUnitComponent } from './air-filtering-unit.component';

describe('AirFilteringUnitComponent', () => {
  let component: AirFilteringUnitComponent;
  let fixture: ComponentFixture<AirFilteringUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirFilteringUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirFilteringUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
