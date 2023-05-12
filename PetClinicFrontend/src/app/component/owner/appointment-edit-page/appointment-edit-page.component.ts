import {Component, OnInit} from '@angular/core';
import {Owner} from "../../../model/Owner";
import {Appointment} from "../../../model/Appointment";
import {MatDialog} from "@angular/material/dialog";
import {AppointmentService} from "../../../service/AppointmentService";
import {DeleteAppointmentDialogComponent} from "../delete-appointment-dialog/delete-appointment-dialog.component";
import jwtDecode from "jwt-decode";
import {BillService} from "../../../service/BillService";

@Component({
  selector: 'app-appointment-edit-page',
  templateUrl: './appointment-edit-page.component.html',
  styleUrls: ['./appointment-edit-page.component.css'],
})
export class AppointmentEditPageComponent implements OnInit {
  appointmentsList: Appointment[] = [];
  displayedColumns: string[] = ['ID', 'Doctor First Name', 'Doctor Last Name', 'Date', 'Facilities', 'Actions']
  owner: Owner = new Owner;
  token: any;

  selected = 0;
  hovered = 0;
  readonly = false;

  constructor(private appointmentService: AppointmentService,
              public dialog: MatDialog,
              public billService: BillService) {
  }

  ngOnInit() {
    this.token = localStorage.getItem('token')
    let tokenDecoded: any
    tokenDecoded = jwtDecode(this.token)
    const id = tokenDecoded.id;
    console.log(id)
    if (id != null) {
      this.appointmentService.getAllByAnimalOwnerId(parseInt(id, 10)).subscribe((data) => {
          console.log(data)
          this.appointmentsList = data
        },
        (_error) => {
          alert("You have no animals registered!")
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

  sendBill(id: number) {
    this.token = localStorage.getItem('token')
    let tokenDecoded: any
    tokenDecoded = jwtDecode(this.token)
    const email = tokenDecoded.email;
    this.billService.generateAndSendBill(email, id).subscribe(() => {
      alert("Bill sent on your email!")
    })
  }

  saveXML(id: number) {
    this.appointmentService.saveAppointmentToXML(id).subscribe(() => {
      alert("XML saved to your computer")
    })
  }
}
