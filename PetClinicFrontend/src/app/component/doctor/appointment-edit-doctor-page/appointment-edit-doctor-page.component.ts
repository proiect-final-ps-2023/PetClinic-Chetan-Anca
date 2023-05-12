import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../../model/Appointment";
import {AppointmentService} from "../../../service/AppointmentService";
import {
  DeleteAppointmentDialogComponent
} from "../../owner/delete-appointment-dialog/delete-appointment-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-appointment-edit-doctor-page',
  templateUrl: './appointment-edit-doctor-page.component.html',
  styleUrls: ['./appointment-edit-doctor-page.component.css']
})
export class AppointmentEditDoctorPageComponent implements OnInit {
  token: any
  appointmentsList: Appointment[] = [];
  displayedColumns: string[] = ['ID', 'Animal Name', 'Date', 'Facilities', 'Actions']

  constructor(private appointmentService: AppointmentService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.token = localStorage.getItem('token')
    let tokenDecoded: any
    tokenDecoded = jwtDecode(this.token)
    const id = tokenDecoded.id;
    console.log(id)
    if (id != null) {
      this.appointmentService.getAllAppointmentsByDoctorId(parseInt(id, 10)).subscribe((data) => {
          console.log(data)
          this.appointmentsList = data
        },
        (_error) => {
          alert("You have no appointments registered!")
        });
    }
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteAppointmentDialogComponent, {
      width: '250px',
      data: {id},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.appointmentsList = this.appointmentsList.filter(
          (_) => _.appointmentId !== id
        );
      }
    });
  }
}
