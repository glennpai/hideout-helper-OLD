import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScavCaseComponent } from './scav-case.component';

describe('ScavCaseComponent', () => {
  let component: ScavCaseComponent;
  let fixture: ComponentFixture<ScavCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScavCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScavCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
