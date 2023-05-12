import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../../model/Doctor";
import {Router} from "@angular/router";
import {DoctorService} from "../../../service/DoctorService";

@Component({
  selector: 'app-add-doctor-page',
  templateUrl: './add-doctor-page.component.html',
  styleUrls: ['./add-doctor-page.component.css']
})
export class AddDoctorPageComponent implements OnInit {
  doctor = new Doctor();

  valid: boolean = true

  constructor(
    private doctorService: DoctorService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  add() {
    const emailRegex = new RegExp('^[^@\\s]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$');
    const phoneNumberRegex = new RegExp('^(?:(?:\\+|00)\\d{1,3}\\s?)?\\d{10,}$')
    const passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!@#$%^&*\.]).{10,}$');
    const hourRegex = new RegExp('^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$')
    this.valid = true
    if (this.doctor.firstName == undefined || this.doctor.firstName == "") {
      this.valid = false
      alert("First name is mandatory")
    }
    if (this.doctor.lastName == undefined || this.doctor.lastName == "") {
      this.valid = false
      alert("Last name is mandatory")
    }
    if (emailRegex.test(<string>this.doctor.email) == false) {
      this.valid = false
      alert("Check the correct format for email")
    }
    if (passwordRegex.test(<string>this.doctor.password) == false) {
      this.valid = false
      alert("Check the correct format for password")
    }
    if (phoneNumberRegex.test(<string>this.doctor.phoneNumber) == false) {
      this.valid = false
      alert("Check the correct format for phone number")
    }
    if (hourRegex.test(<string>this.doctor.startScheduleTime) == false) {
      this.valid = false
      alert("Check the correct format for start schedule time")
    }
    if (hourRegex.test(<string>this.doctor.endScheduleTime) == false) {
      this.valid = false
      alert("Check the correct format for end schedule time")
    }

    if (this.valid) {
      this.doctorService.addDoctor(this.doctor).subscribe(() => {
        this.router.navigate(['/doctorEdit']);
      }, (_error) => {
        alert("Wrong doctor details")
      });
    }
  }

}
