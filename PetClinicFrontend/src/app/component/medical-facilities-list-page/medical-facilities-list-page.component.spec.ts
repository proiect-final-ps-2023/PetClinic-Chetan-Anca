import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalFacilitiesListPageComponent } from './medical-facilities-list-page.component';

describe('MedicalServicesListPageComponent', () => {
  let component: MedicalFacilitiesListPageComponent;
  let fixture: ComponentFixture<MedicalFacilitiesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalFacilitiesListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalFacilitiesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
