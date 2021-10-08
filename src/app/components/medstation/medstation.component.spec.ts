import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedstationComponent } from './medstation.component';

describe('MedstationComponent', () => {
  let component: MedstationComponent;
  let fixture: ComponentFixture<MedstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedstationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
