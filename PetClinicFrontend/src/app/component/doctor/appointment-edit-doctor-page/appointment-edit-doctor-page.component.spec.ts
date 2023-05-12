import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentEditDoctorPageComponent } from './appointment-edit-doctor-page.component';

describe('AppointmentEditDoctorPageComponent', () => {
  let component: AppointmentEditDoctorPageComponent;
  let fixture: ComponentFixture<AppointmentEditDoctorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentEditDoctorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentEditDoctorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
