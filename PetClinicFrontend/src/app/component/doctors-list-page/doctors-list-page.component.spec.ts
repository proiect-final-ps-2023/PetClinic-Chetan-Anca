import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsListPageComponent } from './doctors-list-page.component';

describe('DoctorsListPageComponent', () => {
  let component: DoctorsListPageComponent;
  let fixture: ComponentFixture<DoctorsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
