import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Owner} from "../../model/Owner";
import {AuthenticationService} from "../../service/AuthenticationService";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {
  owner: Owner = new Owner();
  valid: boolean = true

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  ngOnInit() {

  }

  ownerRegister() {
    const emailRegex = new RegExp('^[^@\\s]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$');
    const phoneNumberRegex = new RegExp('^(?:(?:\\+|00)\\d{1,3}\\s?)?\\d{10,}$')
    const passwordRegex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!@#$%^&*\.]).{10,}$');
    this.valid = true
    if (this.owner.firstName == undefined || this.owner.firstName == "") {
      this.valid = false
      alert("First name is mandatory")
    }
    if (this.owner.lastName == undefined || this.owner.lastName == "") {
      this.valid = false
      alert("Last name is mandatory")
    }
    if (emailRegex.test(<string>this.owner.email) == false) {
      this.valid = false
      alert("Check the correct format for email")
    }
    if (passwordRegex.test(<string>this.owner.password) == false) {
      this.valid = false
      alert("Check the correct format for password")
    }
    if (phoneNumberRegex.test(<string>this.owner.phoneNumber) == false) {
      this.valid = false
      alert("Check the correct format for phone number")
    }

    if (this.valid == true) {
      this.authenticationService.registerOwner(this.owner).subscribe(addedOwner => {
        console.log(addedOwner)
        alert("Registration successfully")
        this.router.navigateByUrl('/login')
      }, error => {
        alert("Wrong details")
      })
    }
  }
}
