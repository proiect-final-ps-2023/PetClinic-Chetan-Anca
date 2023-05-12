import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalUpdateDoctorPageComponent } from './animal-update-doctor-page.component';

describe('AnimalUpdateDoctorPageComponent', () => {
  let component: AnimalUpdateDoctorPageComponent;
  let fixture: ComponentFixture<AnimalUpdateDoctorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalUpdateDoctorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalUpdateDoctorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
