import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalEditAdminPageComponent } from './animal-edit-admin-page.component';

describe('AnimalEditAdminPageComponent', () => {
  let component: AnimalEditAdminPageComponent;
  let fixture: ComponentFixture<AnimalEditAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalEditAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalEditAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
