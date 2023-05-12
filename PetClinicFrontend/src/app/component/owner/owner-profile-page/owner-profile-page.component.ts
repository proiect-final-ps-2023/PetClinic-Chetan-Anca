import {Component, OnInit} from '@angular/core';
import {Owner} from "../../../model/Owner";
import {OwnerService} from "../../../service/OwnerService";
import {ActivatedRoute, Router} from "@angular/router";
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-owner-profile-page',
  templateUrl: './owner-profile-page.component.html',
  styleUrls: ['./owner-profile-page.component.css']
})
export class OwnerProfilePageComponent implements OnInit {

  token: any
  owner: Owner = new Owner();

  constructor(
    private ownerService: OwnerService,
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
    this.ownerService.getOwnerById(id).subscribe((data) => {
      this.owner = data;
      console.log(this.owner)
    });
  }

  update() {
    this.ownerService.updateOwner(this.owner).subscribe(() => {
      console.log(this.owner)
      this.router.navigate(['/owner']);
    });
  }
}
