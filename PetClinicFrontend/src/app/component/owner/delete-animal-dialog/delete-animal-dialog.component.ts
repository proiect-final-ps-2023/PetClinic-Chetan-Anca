import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AnimalService} from "../../../service/AnimalService";

@Component({
  selector: 'app-delete-animal-dialog',
  templateUrl: './delete-animal-dialog.component.html',
  styleUrls: ['./delete-animal-dialog.component.css']
})
export class DeleteAnimalDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteAnimalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private animalService: AnimalService
  ) {
  }
  confirmDelete() {
    this.animalService.deleteAnimal(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }

}
