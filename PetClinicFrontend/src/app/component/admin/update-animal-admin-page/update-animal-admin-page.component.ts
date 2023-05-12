import { Component } from '@angular/core';
import {Doctor} from "../../../model/Doctor";
import {DoctorService} from "../../../service/DoctorService";
import {ActivatedRoute, Router} from "@angular/router";
import {Animal} from "../../../model/Animal";
import {AnimalService} from "../../../service/AnimalService";

@Component({
  selector: 'app-update-animal-admin-page',
  templateUrl: './update-animal-admin-page.component.html',
  styleUrls: ['./update-animal-admin-page.component.css']
})
export class UpdateAnimalAdminPageComponent {
  animal: Animal = new Animal();

  constructor(
    private animalService: AnimalService,
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
    this.animalService.getAnimalById(id).subscribe((data) => {
      this.animal = data;
      console.log(this.animal)
    });
  }

  update() {
    this.animalService.updateAnimal(this.animal).subscribe(() => {
      console.log(this.animal)
      this.router.navigate(['/animalEdit']);
    });
  }
}
