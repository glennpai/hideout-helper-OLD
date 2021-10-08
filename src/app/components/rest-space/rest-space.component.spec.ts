import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestSpaceComponent } from './rest-space.component';

describe('RestSpaceComponent', () => {
  let component: RestSpaceComponent;
  let fixture: ComponentFixture<RestSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
