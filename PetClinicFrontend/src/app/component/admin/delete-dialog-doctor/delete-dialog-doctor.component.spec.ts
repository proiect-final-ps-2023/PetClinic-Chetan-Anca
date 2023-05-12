import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogDoctorComponent } from './delete-dialog-doctor.component';

describe('DeleteDialogDoctorComponent', () => {
  let component: DeleteDialogDoctorComponent;
  let fixture: ComponentFixture<DeleteDialogDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDialogDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDialogDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
