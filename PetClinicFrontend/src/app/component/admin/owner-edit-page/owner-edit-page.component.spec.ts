import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerEditPageComponent } from './owner-edit-page.component';

describe('OwnerEditPageComponent', () => {
  let component: OwnerEditPageComponent;
  let fixture: ComponentFixture<OwnerEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
