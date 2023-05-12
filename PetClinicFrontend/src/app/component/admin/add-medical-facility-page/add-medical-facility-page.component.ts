import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {MedicalFacility} from "../../../model/MedicalFacility";
import {MedicalFacilityService} from "../../../service/MedicalFacilityService";

@Component({
  selector: 'app-add-medical-facility',
  templateUrl: './add-medical-facility-page.component.html',
  styleUrls: ['./add-medical-facility-page.component.css']
})
export class AddMedicalFacilityPageComponent {
  facility = new MedicalFacility();
  valid: boolean = true

  constructor(
    private medicalFacilityService: MedicalFacilityService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  add() {
    this.valid = true
    if (this.facility.name == undefined || this.facility.name == "") {
      this.valid = false
      alert("Medical facility must have a name")
    }
    if (this.facility.price == undefined || this.facility.price <= 0) {
      this.valid = false
      alert("Medical facility must have a valid price")
    }
    this.medicalFacilityService.addMedicalFacility(this.facility).subscribe(() => {
      this.router.navigate(['/facilityEdit']);
    }, (_error) => {
      alert("Wrong medical facility details")
    });
  }
}
