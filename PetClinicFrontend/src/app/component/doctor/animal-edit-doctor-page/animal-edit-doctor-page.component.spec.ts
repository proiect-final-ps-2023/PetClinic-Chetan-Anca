import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalEditDoctorPageComponent } from './animal-edit-doctor-page.component';

describe('AnimalEditDoctorPageComponent', () => {
  let component: AnimalEditDoctorPageComponent;
  let fixture: ComponentFixture<AnimalEditDoctorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalEditDoctorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalEditDoctorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
