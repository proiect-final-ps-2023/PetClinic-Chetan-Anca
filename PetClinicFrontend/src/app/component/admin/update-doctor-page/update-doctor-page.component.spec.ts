import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDoctorPageComponent } from './update-doctor-page.component';

describe('UpdateDoctorPageComponent', () => {
  let component: UpdateDoctorPageComponent;
  let fixture: ComponentFixture<UpdateDoctorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDoctorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDoctorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
