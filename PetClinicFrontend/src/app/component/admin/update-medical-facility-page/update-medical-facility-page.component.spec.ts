import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMedicalFacilityPageComponent } from './update-medical-facility-page.component';

describe('UpdateMedicalFacilityComponent', () => {
  let component: UpdateMedicalFacilityPageComponent;
  let fixture: ComponentFixture<UpdateMedicalFacilityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMedicalFacilityPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMedicalFacilityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
