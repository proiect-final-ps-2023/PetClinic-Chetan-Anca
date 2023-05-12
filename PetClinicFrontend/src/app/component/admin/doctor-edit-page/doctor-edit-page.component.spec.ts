import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditPageComponent } from './doctor-edit-page.component';

describe('DoctorEditPageComponent', () => {
  let component: DoctorEditPageComponent;
  let fixture: ComponentFixture<DoctorEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
