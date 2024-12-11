import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitiveFeeComponent } from './competitive-fee.component';

describe('CompetitiveFeeComponent', () => {
  let component: CompetitiveFeeComponent;
  let fixture: ComponentFixture<CompetitiveFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompetitiveFeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitiveFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
