import {Component, OnInit} from '@angular/core';
import {Animal} from "../../../model/Animal";
import {AnimalService} from "../../../service/AnimalService";
import {MatDialog} from "@angular/material/dialog";
import {Doctor} from "../../../model/Doctor";

@Component({
  selector: 'app-animal-edit-doctor-page',
  templateUrl: './animal-edit-doctor-page.component.html',
  styleUrls: ['./animal-edit-doctor-page.component.css']
})
export class AnimalEditDoctorPageComponent implements OnInit {
  animalsList: Animal[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Animal type', 'Breed', 'Age', 'Weight', 'Actions']

  constructor(private animalService: AnimalService, public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.animalService.getAllAnimals().subscribe((data) => {
        console.log(data)
        this.animalsList = data
      },
      (_error) => {
        alert("There are no animals available!")
      });
  }

}
