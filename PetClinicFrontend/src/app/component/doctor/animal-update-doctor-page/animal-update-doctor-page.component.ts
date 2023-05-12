import {Component, OnInit} from '@angular/core';
import {Animal} from "../../../model/Animal";
import {AnimalService} from "../../../service/AnimalService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-animal-update-doctor-page',
  templateUrl: './animal-update-doctor-page.component.html',
  styleUrls: ['./animal-update-doctor-page.component.css']
})
export class AnimalUpdateDoctorPageComponent implements OnInit {
  animal: Animal = new Animal();

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const animalId = Number(param.get('animalId'));
      this.getAnimalById(animalId);
    });
  }

  getAnimalById(animalId: number) {
    this.animalService.getAnimalById(animalId).subscribe((data) => {
      this.animal = data;
      console.log(this.animal)
    });
  }

  update() {
    this.animalService.updateAnimal(this.animal).subscribe(() => {
      console.log(this.animal)
      this.router.navigate(['doctor', 'animalsView']);
    });
  }

}
