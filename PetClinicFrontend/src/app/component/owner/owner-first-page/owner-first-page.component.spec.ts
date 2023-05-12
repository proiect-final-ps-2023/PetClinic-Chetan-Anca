import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerFirstPageComponent } from './owner-first-page.component';

describe('OwnerFirstPageComponent', () => {
  let component: OwnerFirstPageComponent;
  let fixture: ComponentFixture<OwnerFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerFirstPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnerFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
