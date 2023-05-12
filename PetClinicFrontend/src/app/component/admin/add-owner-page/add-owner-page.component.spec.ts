import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOwnerPageComponent } from './add-owner-page.component';

describe('AddOwnerPageComponent', () => {
  let component: AddOwnerPageComponent;
  let fixture: ComponentFixture<AddOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOwnerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
