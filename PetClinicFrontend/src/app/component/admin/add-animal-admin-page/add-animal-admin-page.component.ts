import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Animal} from "../../../model/Animal";
import {Owner} from "../../../model/Owner";
import {AnimalService} from "../../../service/AnimalService";
import {OwnerService} from "../../../service/OwnerService";

@Component({
  selector: 'app-add-animal-admin-page',
  templateUrl: './add-animal-admin-page.component.html',
  styleUrls: ['./add-animal-admin-page.component.css']
})
export class AddAnimalAdminPageComponent implements OnInit {
  animal = new Animal();
  owner = new Owner();
  valid: boolean = true;
  ownerFirstName: string = ""
  ownerLastName: string = ""

  constructor(
    private animalService: AnimalService,
    private ownerService: OwnerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  add() {
    this.ownerService.getOwnerByFirstNameAndLastName(this.ownerFirstName, this.ownerLastName).subscribe((foundOwner) => {
      this.animal.owner = foundOwner
      this.valid = true
      if (this.animal.name == undefined || this.animal.name == "") {
        this.valid = false
        alert("Animal must have a name")
      }
      if (this.animal.type == undefined) {
        this.valid = false
        alert("Animal must have a type")
      }
      if (this.animal.age == undefined || this.animal.age == 0) {
        this.valid = false
        alert("Animal must have age")
      }
      if (this.animal.weight == undefined || this.animal.weight == 0) {
        this.valid = false
        alert("Animal must have weight")
      }
      if (this.valid) {
        this.animalService.addAnimal(this.animal).subscribe((animal) => {
          this.router.navigate(['/animalEdit']);
        }, error => {
          alert("Wrong animal details")
        })
      }
    }, error => {
      alert("Wrong owner name")
    })
  }
}
