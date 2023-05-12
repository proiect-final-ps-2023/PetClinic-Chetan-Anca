import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicalFacilityPageComponent } from './add-medical-facility-page.component';

describe('AddMedicalFacilityComponent', () => {
  let component: AddMedicalFacilityPageComponent;
  let fixture: ComponentFixture<AddMedicalFacilityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMedicalFacilityPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMedicalFacilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
