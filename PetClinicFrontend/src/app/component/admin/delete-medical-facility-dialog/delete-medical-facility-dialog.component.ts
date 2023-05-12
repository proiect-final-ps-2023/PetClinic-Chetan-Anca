import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MedicalFacilityService} from "../../../service/MedicalFacilityService";

@Component({
  selector: 'app-delete-medical-facility-dialog',
  templateUrl: './delete-medical-facility-dialog.component.html',
  styleUrls: ['./delete-medical-facility-dialog.component.css']
})
export class DeleteMedicalFacilityDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteMedicalFacilityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private medicalFacilityService: MedicalFacilityService
  ) {
  }

  ngOnInit(): void {
  }

  confirmDelete() {
    this.medicalFacilityService.deleteMedicalFacility(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }
}
