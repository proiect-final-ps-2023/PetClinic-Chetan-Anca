import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {OwnerService} from "../../service/OwnerService";
import {DoctorService} from "../../service/DoctorService";
import jwtDecode from "jwt-decode";
import {UserType} from "../../model/UserType";

@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.css']
})
export class ChangePasswordPageComponent {
  token: any
  password: string = ""
  confirmPassword: string = ""

  valid: boolean = true

  constructor(private ownerService: OwnerService, private doctorService: DoctorService, private router: Router) {

  }

  changePassword() {
    const passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!@#$%^&*\.]).{10,}$');
    this.token = localStorage.getItem("token")
    let tokenDecoded: any
    tokenDecoded = jwtDecode(this.token)
    const userType = tokenDecoded.userType;
    const id = tokenDecoded.id;
    const email = tokenDecoded.email
    this.valid = true
    if (this.password != this.confirmPassword) {
      this.valid = false
      alert("Password must be the same")
    } else if (passwordRegex.test(this.password) == false) {
      this.valid = false
      alert("Password must have the correct format")
    }
    if (this.valid) {
      if (userType == UserType.OWNER) {
        this.ownerService.updatePassword(id, this.password).subscribe((response) => {
          localStorage.clear()
          this.router.navigateByUrl('/login')
        }, error => {
          alert("Invalid password")
        })
      } else if (userType == UserType.DOCTOR) {
        this.doctorService.updatePassword(id, this.password).subscribe((response) => {
          localStorage.clear()
          this.router.navigateByUrl('/login')
        }, error => {
          alert("Invalid password")
        })
      }
    }
  }
}
