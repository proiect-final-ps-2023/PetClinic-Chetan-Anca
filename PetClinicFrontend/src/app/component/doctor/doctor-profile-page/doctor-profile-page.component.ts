import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import jwtDecode from "jwt-decode";
import {DoctorService} from "../../../service/DoctorService";
import {Doctor} from "../../../model/Doctor";

@Component({
  selector: 'app-doctor-profile-page',
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.css']
})
export class DoctorProfilePageComponent implements OnInit {

  token: any
  doctor: Doctor = new Doctor();

  constructor(
    private doctorService: DoctorService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.token = localStorage.getItem("token")
    let tokenDecoded: any
    tokenDecoded = jwtDecode(this.token)
    const id = tokenDecoded.id
    this.getById(id)
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
      this.router.navigate(['/doctor']);
    });
  }

}
