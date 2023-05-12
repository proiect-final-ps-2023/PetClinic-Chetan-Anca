import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAnimalDialogComponent } from './delete-animal-dialog.component';

describe('DeleteAnimalDialogComponent', () => {
  let component: DeleteAnimalDialogComponent;
  let fixture: ComponentFixture<DeleteAnimalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAnimalDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAnimalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
