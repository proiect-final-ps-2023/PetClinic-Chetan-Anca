import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentPageComponent } from './add-appointment-page.component';

describe('AddAppointmentPageComponent', () => {
  let component: AddAppointmentPageComponent;
  let fixture: ComponentFixture<AddAppointmentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppointmentPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppointmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
