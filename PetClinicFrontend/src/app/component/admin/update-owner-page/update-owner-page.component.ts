import {Component, OnInit} from '@angular/core';
import {Doctor} from "../../../model/Doctor";
import {DoctorService} from "../../../service/DoctorService";
import {ActivatedRoute, Router} from "@angular/router";
import {Owner} from "../../../model/Owner";
import {OwnerService} from "../../../service/OwnerService";

@Component({
  selector: 'app-update-owner-page',
  templateUrl: './update-owner-page.component.html',
  styleUrls: ['./update-owner-page.component.css']
})
export class UpdateOwnerPageComponent implements OnInit {

  owner: Owner = new Owner();

  constructor(
    private ownerService: OwnerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
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
      this.router.navigate(['/ownerEdit']);
    });
  }

}
