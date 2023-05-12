import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalAdminPageComponent } from './add-animal-admin-page.component';

describe('AddAnimalAdminPageComponent', () => {
  let component: AddAnimalAdminPageComponent;
  let fixture: ComponentFixture<AddAnimalAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAnimalAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnimalAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
