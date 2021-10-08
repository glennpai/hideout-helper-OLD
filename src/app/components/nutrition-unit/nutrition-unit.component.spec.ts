import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionUnitComponent } from './nutrition-unit.component';

describe('NutritionUnitComponent', () => {
  let component: NutritionUnitComponent;
  let fixture: ComponentFixture<NutritionUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
