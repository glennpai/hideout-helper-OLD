import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterCollectorComponent } from './water-collector.component';

describe('WaterCollectorComponent', () => {
  let component: WaterCollectorComponent;
  let fixture: ComponentFixture<WaterCollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterCollectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
