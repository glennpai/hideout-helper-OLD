import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitcoinFarmComponent } from './bitcoin-farm.component';

describe('BitcoinFarmComponent', () => {
  let component: BitcoinFarmComponent;
  let fixture: ComponentFixture<BitcoinFarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitcoinFarmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BitcoinFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
