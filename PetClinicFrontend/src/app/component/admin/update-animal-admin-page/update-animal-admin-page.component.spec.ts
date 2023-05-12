import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnimalAdminPageComponent } from './update-animal-admin-page.component';

describe('UpdateAnimalAdminPageComponent', () => {
  let component: UpdateAnimalAdminPageComponent;
  let fixture: ComponentFixture<UpdateAnimalAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAnimalAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAnimalAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
