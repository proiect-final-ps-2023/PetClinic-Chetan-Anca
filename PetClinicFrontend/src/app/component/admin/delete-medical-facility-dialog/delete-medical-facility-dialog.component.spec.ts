import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMedicalFacilityDialogComponent } from './delete-medical-facility-dialog.component';

describe('DeleteMedicalFacilityDialogComponent', () => {
  let component: DeleteMedicalFacilityDialogComponent;
  let fixture: ComponentFixture<DeleteMedicalFacilityDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMedicalFacilityDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMedicalFacilityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
