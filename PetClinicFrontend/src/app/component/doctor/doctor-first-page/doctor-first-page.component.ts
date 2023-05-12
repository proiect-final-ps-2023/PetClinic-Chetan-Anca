import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../../model/Doctor";
import {DoctorService} from "../../../service/DoctorService";
import jwtDecode from "jwt-decode";
import {UserService} from "../../../service/UserService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-doctor-first-page',
  templateUrl: './doctor-first-page.component.html',
  styleUrls: ['./doctor-first-page.component.css']
})
export class DoctorFirstPageComponent implements OnInit {
  doctor: Doctor = new Doctor();
  token: any

  constructor(private doctorService: DoctorService, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    let tokenDecoded: any
    tokenDecoded = jwtDecode(this.token)
    const id = tokenDecoded.id;
    console.log(id)
    if (id != null) {
      this.getById(parseInt(id, 10))
    }
  }

  getById(id: number) {
    this.doctorService.getDoctorById(id).subscribe((data) => {
      this.doctor = data;
      console.log(this.doctor)
    });
  }

  logout() {
    this.token = localStorage.getItem('token')
    let tokenDecoded: any
    tokenDecoded = jwtDecode(this.token)
    const id = tokenDecoded.id;
    this.userService.logout(id).subscribe((response) => {
      localStorage.clear()
      this.router.navigateByUrl('')
    })
  }
}
