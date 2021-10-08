import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoozeGeneratorComponent } from './booze-generator.component';

describe('BoozeGeneratorComponent', () => {
  let component: BoozeGeneratorComponent;
  let fixture: ComponentFixture<BoozeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoozeGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoozeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
