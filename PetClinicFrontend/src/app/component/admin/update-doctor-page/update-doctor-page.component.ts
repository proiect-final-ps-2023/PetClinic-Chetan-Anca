import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../../model/Doctor";
import {DoctorService} from "../../../service/DoctorService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-doctor-page',
  templateUrl: './update-doctor-page.component.html',
  styleUrls: ['./update-doctor-page.component.css']
})
export class UpdateDoctorPageComponent implements OnInit{
  doctor: Doctor = new Doctor;

  constructor(
    private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.doctorService.getDoctorById(id).subscribe((data) => {
      this.doctor = data;
      console.log(this.doctor)
    });
  }

  update() {
    this.doctorService.updateDoctor(this.doctor).subscribe(() => {
      console.log(this.doctor)
      this.router.navigate(['/doctorEdit']);
    });
  }

}
