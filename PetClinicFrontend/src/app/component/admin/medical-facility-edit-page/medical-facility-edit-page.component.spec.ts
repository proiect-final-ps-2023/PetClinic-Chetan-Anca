import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFacilityEditPageComponent } from './medical-facility-edit-page.component';

describe('MedicalFacilityEditPageComponent', () => {
  let component: MedicalFacilityEditPageComponent;
  let fixture: ComponentFixture<MedicalFacilityEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalFacilityEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalFacilityEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
