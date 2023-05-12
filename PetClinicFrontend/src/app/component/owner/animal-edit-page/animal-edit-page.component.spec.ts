import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalEditPageComponent } from './animal-edit-page.component';

describe('AnimalEditPageComponent', () => {
  let component: AnimalEditPageComponent;
  let fixture: ComponentFixture<AnimalEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
