import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivityPageComponent } from './user-activity-page.component';

describe('UserActivityPageComponent', () => {
  let component: UserActivityPageComponent;
  let fixture: ComponentFixture<UserActivityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserActivityPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserActivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
