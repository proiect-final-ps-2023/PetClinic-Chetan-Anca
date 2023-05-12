import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../../model/Doctor";
import {DoctorService} from "../../../service/DoctorService";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogDoctorComponent} from "../delete-dialog-doctor/delete-dialog-doctor.component";

@Component({
  selector: 'app-doctor-edit-page',
  templateUrl: './doctor-edit-page.component.html',
  styleUrls: ['./doctor-edit-page.component.css']
})
export class DoctorEditPageComponent implements OnInit {
  filterName: any
  doctorsList: Doctor[] = [];
  displayedColumns: string[] = ['ID', 'First Name', 'Last Name', 'Phone Number', 'Email', 'Password', 'Start Schedule Time', 'End Schedule Time', 'Actions']
  criteria: string = ""

  constructor(private doctorService: DoctorService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe((data) => {
        console.log(data)
        this.doctorsList = data
      },
      (_error) => {
        alert("No doctors available now")
      });
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogDoctorComponent, {
      width: '250px',
      data: {id},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.doctorsList = this.doctorsList.filter(
          (_) => _.doctorId !== id
        );
      }
    });
  }

  onSearch() {
    if (this.criteria == "id") {
      this.doctorService.getDoctorById(this.filterName).subscribe((data) => {
        this.doctorsList = []
        this.doctorsList.push(data)
      });
    } else if (this.criteria == "firstName") {
      this.doctorService.getDoctorsByFirstName(this.filterName).subscribe((data) => {
        this.doctorsList = data
      });
    } else if (this.criteria == "lastName") {
      this.doctorService.getDoctorsByLastName(this.filterName).subscribe((data) => {
        this.doctorsList = data
      });
    } else if (this.criteria == "email") {
      this.doctorService.getDoctorByEmail(this.filterName).subscribe((data) => {
        this.doctorsList = []
        this.doctorsList.push(data)
      });
    } else {
      this.doctorService.getAllDoctors().subscribe((data) => {
        this.doctorsList = data
      });
    }
  }

  saveXML(id: number) {
    this.doctorService.saveDoctorToXML(id).subscribe(() => {
      alert("XML saved to your computer")
    })
  }
}
