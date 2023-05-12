import {Component, OnInit} from '@angular/core';
import {Owner} from "../../../model/Owner";
import {OwnerService} from "../../../service/OwnerService";
import jwtDecode from "jwt-decode";
import {Router} from "@angular/router";
import {UserService} from "../../../service/UserService";

@Component({
  selector: 'app-owner-first-page',
  templateUrl: './owner-first-page.component.html',
  styleUrls: ['./owner-first-page.component.css']
})
export class OwnerFirstPageComponent implements OnInit {
  owner: Owner = new Owner();
  token: any

  constructor(private userService: UserService, private ownerService: OwnerService, private router: Router) {
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
    this.ownerService.getOwnerById(id).subscribe((ownerFound) => {
      this.owner = ownerFound;
      console.log(this.owner)
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
