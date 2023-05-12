import {Component, OnInit} from '@angular/core';
import {MedicalFacilityService} from "../../service/MedicalFacilityService";
import {MedicalFacility} from "../../model/MedicalFacility";

@Component({
  selector: 'app-medical-services-list-page',
  templateUrl: './medical-facilities-list-page.component.html',
  styleUrls: ['./medical-facilities-list-page.component.css']
})
export class MedicalFacilitiesListPageComponent implements OnInit {
  filterName: string = ""

  isCheckedName: string = ""

  isCheckedPrice: string = ""

  medicalFacilitiesList: MedicalFacility[] = [];
  displayedColumns: string[] = ['Name', 'Price']
  constructor(private medicalFacilityService: MedicalFacilityService) {
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

  onSearch() {

    if (this.isCheckedName && this.isCheckedPrice) {
      this.medicalFacilityService.getAllMedicalFacilities().subscribe((data) => {
          console.log(data)
          this.medicalFacilitiesList = data
        },
        (_error) => {
          alert("No medical facilities available now")
        });
    } else if (this.isCheckedPrice) {
      const price = parseInt(this.filterName.trim())
      if (isNaN(price)) {
        alert("Wrong filter text")
      } else {
        this.medicalFacilityService.getAllMedicalFacilitiesByPrice(price).subscribe((data) => {
            console.log(data)
            this.medicalFacilitiesList = data
          },
          (_error) => {
            alert("No medical facilities available now")
          });
      }
    } else if (this.isCheckedName) {
      this.medicalFacilityService.getMedicalFacilityByNameContaining(this.filterName.trim()).subscribe((data) => {
          console.log(data)
          this.medicalFacilitiesList = data
        },
        (_error) => {
          alert("No medical facilities available")
        });
    } else {
      this.medicalFacilityService.getAllMedicalFacilities().subscribe((data) => {
          console.log(data)
          this.medicalFacilitiesList = data
        },
        (_error) => {
          alert("No medical facilities available now")
        });
    }

  }
}
