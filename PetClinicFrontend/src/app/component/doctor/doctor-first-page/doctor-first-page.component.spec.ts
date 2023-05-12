import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorFirstPageComponent } from './doctor-first-page.component';

describe('DoctorFirstPageComponent', () => {
  let component: DoctorFirstPageComponent;
  let fixture: ComponentFixture<DoctorFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorFirstPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
