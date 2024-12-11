import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempToHireComponent } from './temp-to-hire.component';

describe('TempToHireComponent', () => {
  let component: TempToHireComponent;
  let fixture: ComponentFixture<TempToHireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempToHireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempToHireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
