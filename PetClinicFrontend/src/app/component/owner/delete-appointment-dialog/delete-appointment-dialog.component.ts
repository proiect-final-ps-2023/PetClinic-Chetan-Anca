import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AppointmentService} from "../../../service/AppointmentService";

@Component({
  selector: 'app-delete-appointment-dialog',
  templateUrl: './delete-appointment-dialog.component.html',
  styleUrls: ['./delete-appointment-dialog.component.css']
})
export class DeleteAppointmentDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteAppointmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private appointmentService: AppointmentService
  ) {
  }

  confirmDelete() {
    this.appointmentService.deleteAppointment(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }

}
