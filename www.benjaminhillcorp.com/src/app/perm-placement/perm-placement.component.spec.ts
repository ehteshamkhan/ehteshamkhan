import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermPlacementComponent } from './perm-placement.component';

describe('PermPlacementComponent', () => {
  let component: PermPlacementComponent;
  let fixture: ComponentFixture<PermPlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermPlacementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PermPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
