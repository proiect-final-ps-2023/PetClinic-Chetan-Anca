import {Component} from '@angular/core';
import jwtDecode from "jwt-decode";
import {UserService} from "../../../service/UserService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-first-page',
  templateUrl: './admin-first-page.component.html',
  styleUrls: ['./admin-first-page.component.css']
})
export class AdminFirstPageComponent {
  token: any

  constructor(private userService: UserService, private router: Router) {
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
