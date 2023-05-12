import {Component, Injectable, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserType} from "../../model/UserType";
import {Router} from '@angular/router';
import {AuthenticationService} from "../../service/AuthenticationService";
import jwtDecode from "jwt-decode";

@Injectable(
  {
    providedIn: 'root'
  })

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  user: User = new User();
  token: any
  expectedCode: any
  show: boolean = false
  code: any

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  ngOnInit() {

  }

  userLogin() {
    console.log(this.user)
    this.authenticationService.login(this.user.email, this.user.password).subscribe((response: any) => {
      console.log(response.token)
      localStorage.setItem("token", response.token);
      this.token = localStorage.getItem("token")
      let tokenDecoded: any
      tokenDecoded = jwtDecode(this.token)
      const userType = tokenDecoded.userType;
      const email = tokenDecoded.email;

      alert("Correct email and password!")
      if (userType == UserType.ADMIN) {
        this.router.navigateByUrl('/admin')
      } else if (userType == UserType.OWNER) {
        this.router.navigateByUrl('/owner')
      } else {
        this.router.navigateByUrl('/doctor')
      }
      // this.authenticationService.verify(email).subscribe(response => {
      //   this.expectedCode = response
      // })
      // this.show = true
    }, error => {
      alert("Enter correct email and password")
    })
  }

  verify() {
    this.token = localStorage.getItem("token")
    let tokenDecoded: any
    tokenDecoded = jwtDecode(this.token)
    const userType = tokenDecoded.userType;
    console.log(userType)
    if (this.code == this.expectedCode) {
      alert("Login successfully")
      if (userType == UserType.ADMIN) {
        this.router.navigateByUrl('/admin')
      } else if (userType == UserType.OWNER) {
        this.router.navigateByUrl('/owner')
      } else {
        this.router.navigateByUrl('/doctor')
      }
    }
  }

  userRegister() {
    this.router.navigateByUrl('/register')
  }
}
