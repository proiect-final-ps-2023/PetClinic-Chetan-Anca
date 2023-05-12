import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DoctorService} from "../../../service/DoctorService";
import {OwnerService} from "../../../service/OwnerService";

@Component({
  selector: 'app-delete-owner-dialog',
  templateUrl: './delete-owner-dialog.component.html',
  styleUrls: ['./delete-owner-dialog.component.css']
})
export class DeleteOwnerDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteOwnerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ownerService: OwnerService
  ) {
  }

  ngOnInit(): void {
  }

  confirmDelete() {
    this.ownerService.deleteOwner(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }
}
