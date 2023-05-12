import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppointmentDoctorPageComponent } from './update-appointment-doctor-page.component';

describe('UpdateAppointmentDoctorPageComponent', () => {
  let component: UpdateAppointmentDoctorPageComponent;
  let fixture: ComponentFixture<UpdateAppointmentDoctorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppointmentDoctorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAppointmentDoctorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
