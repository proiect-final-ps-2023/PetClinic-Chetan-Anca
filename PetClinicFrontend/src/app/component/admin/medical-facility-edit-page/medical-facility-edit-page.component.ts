import {Component, OnInit} from '@angular/core';
import {MedicalFacility} from "../../../model/MedicalFacility";
import {MedicalFacilityService} from "../../../service/MedicalFacilityService";
import {
  DeleteMedicalFacilityDialogComponent
} from "../delete-medical-facility-dialog/delete-medical-facility-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-medical-facility-edit-page',
  templateUrl: './medical-facility-edit-page.component.html',
  styleUrls: ['./medical-facility-edit-page.component.css']
})
export class MedicalFacilityEditPageComponent implements OnInit {
  filterName: any
  medicalFacilitiesList: MedicalFacility[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Price', 'Actions']
  criteria: string = ""

  constructor(private medicalFacilityService: MedicalFacilityService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.medicalFacilityService.getAllMedicalFacilities().subscribe((data) => {
        console.log(data)
        this.medicalFacilitiesList = data
      },
      (_error) => {
        alert("No medical facilities available now")
      });
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteMedicalFacilityDialogComponent, {
      width: '250px',
      data: {id},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.medicalFacilitiesList = this.medicalFacilitiesList.filter(
          (_) => _.id !== id
        );
      }
    });
  }

  onSearch() {
    if (this.criteria == "id") {
      this.medicalFacilityService.getMedicalFacilityById(this.filterName).subscribe((data) => {
        this.medicalFacilitiesList = []
        this.medicalFacilitiesList.push(data)
      });
    } else if (this.criteria == "name") {
      this.medicalFacilityService.getMedicalFacilityByNameContaining(this.filterName).subscribe((data) => {
        this.medicalFacilitiesList = data
      });
    } else if (this.criteria == "price") {
      this.medicalFacilityService.getAllMedicalFacilitiesByPrice(this.filterName).subscribe((data) => {
        this.medicalFacilitiesList = data
      });
    } else {
      this.medicalFacilityService.getAllMedicalFacilities().subscribe((data) => {
        this.medicalFacilitiesList = data
      });
    }
  }

}
