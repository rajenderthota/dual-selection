import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualSelectionComponent } from './dual-selection.component';

describe('DualSelectionComponent', () => {
  let component: DualSelectionComponent;
  let fixture: ComponentFixture<DualSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
