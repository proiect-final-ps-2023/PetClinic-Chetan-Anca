import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentEditPageComponent } from './appointment-edit-page.component';

describe('AppointmentEditPageComponent', () => {
  let component: AppointmentEditPageComponent;
  let fixture: ComponentFixture<AppointmentEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
