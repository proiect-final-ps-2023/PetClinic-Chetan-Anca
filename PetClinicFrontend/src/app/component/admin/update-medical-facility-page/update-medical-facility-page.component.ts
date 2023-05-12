import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MedicalFacility} from "../../../model/MedicalFacility";
import {MedicalFacilityService} from "../../../service/MedicalFacilityService";

@Component({
  selector: 'app-update-medical-facility',
  templateUrl: './update-medical-facility-page.component.html',
  styleUrls: ['./update-medical-facility-page.component.css']
})
export class UpdateMedicalFacilityPageComponent implements OnInit {
  facility: MedicalFacility = new MedicalFacility();

  constructor(
    private medicalFacilityService: MedicalFacilityService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.medicalFacilityService.getMedicalFacilityById(id).subscribe((data) => {
      this.facility = data;
      console.log(this.facility)
    });
  }

  update() {
    this.medicalFacilityService.updateMedicalFacility(this.facility).subscribe(() => {
      console.log(this.facility)
      this.router.navigate(['/facilityEdit']);
    });
  }

}
