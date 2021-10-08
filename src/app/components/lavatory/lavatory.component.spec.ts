import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LavatoryComponent } from './lavatory.component';

describe('LavatoryComponent', () => {
  let component: LavatoryComponent;
  let fixture: ComponentFixture<LavatoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LavatoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LavatoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
