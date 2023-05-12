import {Component, OnInit} from '@angular/core';
import {Animal} from "../../../model/Animal";
import {AnimalService} from "../../../service/AnimalService";
import {MatDialog} from "@angular/material/dialog";
import {DeleteAnimalDialogComponent} from "../../owner/delete-animal-dialog/delete-animal-dialog.component";

@Component({
  selector: 'app-animal-edit-admin-page',
  templateUrl: './animal-edit-admin-page.component.html',
  styleUrls: ['./animal-edit-admin-page.component.css']
})
export class AnimalEditAdminPageComponent implements OnInit {
  filterName: any
  animalsList: Animal[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Owner First Name', 'Owner Last Name', 'Animal Type', 'Breed', 'Age', 'Weight', 'Actions']
  criteria: string = ""

  constructor(private animalService: AnimalService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.animalService.getAllAnimals().subscribe((data) => {
        console.log(data)
        this.animalsList = data
      },
      (_error) => {
        alert("No animals available now")
      });
  }

  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(DeleteAnimalDialogComponent, {
      width: '250px',
      data: {id},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.animalsList = this.animalsList.filter(
          (_) => _.animalId !== id
        );
      }
    });
  }

  onSearch() {
    if (this.criteria == "id") {
      this.animalService.getAnimalById(this.filterName).subscribe((data) => {
        this.animalsList = []
        this.animalsList.push(data)
      });
    } else if (this.criteria == "name") {
      this.animalService.getAllAnimalsByName(this.filterName).subscribe((data) => {
        this.animalsList = data
      });
    } else if (this.criteria == "animalType") {
      this.animalService.getAllAnimalsByType(this.filterName).subscribe((data) => {
        this.animalsList = data
      });
    } else if (this.criteria == "age") {
      this.animalService.getAllAnimalsByAgeGraterThan(this.filterName).subscribe((data) => {
        this.animalsList = data
      });
    } else if (this.criteria == "weight") {
      this.animalService.getAllByWeightLessThan(this.filterName).subscribe((data) => {
        this.animalsList = data
      });
    } else {
      this.animalService.getAllAnimals().subscribe((data) => {
        this.animalsList = data
      });
    }
  }

  saveXML(id: number) {
    this.animalService.saveAnimalToXML(id).subscribe(() => {
      alert("XML saved to your computer")
    })
  }
}
