import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../service/UserService";

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.css']
})
export class ForgotPasswordPageComponent {
  email: string = ""

  error: boolean = false

  constructor(private userService: UserService, private router: Router) {

  }

  sendEmail() {
    this.userService.forgotPassword(this.email).subscribe((response) => {
      this.error = false
    }, (_error) => {
      this.error = true
    })
    alert("Email sent!")
    this.router.navigateByUrl('/login')
  }
}
