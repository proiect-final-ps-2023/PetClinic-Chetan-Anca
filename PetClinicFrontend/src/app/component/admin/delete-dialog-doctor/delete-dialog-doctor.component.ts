import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DoctorService} from "../../../service/DoctorService";

@Component({
  selector: 'app-delete-dialog-doctor',
  templateUrl: './delete-dialog-doctor.component.html',
  styleUrls: ['./delete-dialog-doctor.component.css']
})
export class DeleteDialogDoctorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogDoctorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private doctorService: DoctorService
  ) {
  }

  ngOnInit(): void {

  }

  confirmDelete() {
    this.doctorService.deleteDoctor(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }

}
