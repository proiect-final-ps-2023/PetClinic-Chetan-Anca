import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {OwnerService} from "../../../service/OwnerService";
import {Owner} from "../../../model/Owner";
import {DeleteOwnerDialogComponent} from "../delete-owner-dialog/delete-owner-dialog.component";

@Component({
  selector: 'app-doctor-edit-page',
  templateUrl: './owner-edit-page.component.html',
  styleUrls: ['./owner-edit-page.component.css']
})
export class OwnerEditPageComponent implements OnInit {
  ownersList: Owner[] = [];
  displayedColumns: string[] = ['ID', 'First Name', 'Last Name', 'Phone Number', 'Email', 'Password', 'Actions']
  filterName: any
  criteria: string = ""


  constructor(private ownerService: OwnerService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.ownerService.getAllOwners().subscribe((data) => {
        console.log(data)
        this.ownersList = data
      },
      (_error) => {
        alert("No owners available now")
      });
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteOwnerDialogComponent, {
      width: '250px',
      data: {id},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.ownersList = this.ownersList.filter(
          (_) => _.ownerId !== id
        );
      }
    });
  }

  onSearch() {
    if (this.criteria == "id") {
      this.ownerService.getOwnerById(this.filterName).subscribe((data) => {
        this.ownersList = []
        this.ownersList.push(data)
      });
    } else if (this.criteria == "firstName") {
      this.ownerService.getAllOwnersByFirstName(this.filterName).subscribe((data) => {
        this.ownersList = data
      });
    } else if (this.criteria == "lastName") {
      this.ownerService.getAllOwnersByLastName(this.filterName).subscribe((data) => {
        this.ownersList = data
      });
    } else if (this.criteria == "email") {
      this.ownerService.getOwnerByEmail(this.filterName).subscribe((data) => {
        this.ownersList = []
        this.ownersList.push(data)
      });
    } else {
      this.ownerService.getAllOwners().subscribe((data) => {
        this.ownersList = data
      });
    }
  }

  saveXML(id: number) {
    this.ownerService.saveOwnerToXML(id).subscribe(() => {
      alert("XML saved to your computer")
    })
  }

}
