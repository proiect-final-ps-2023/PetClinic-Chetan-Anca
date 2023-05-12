import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOwnerPageComponent } from './update-owner-page.component';

describe('UpdateOwnerPageComponent', () => {
  let component: UpdateOwnerPageComponent;
  let fixture: ComponentFixture<UpdateOwnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOwnerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOwnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
