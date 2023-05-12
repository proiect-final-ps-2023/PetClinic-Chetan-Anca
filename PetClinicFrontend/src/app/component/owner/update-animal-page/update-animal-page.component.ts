import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Owner} from "../../../model/Owner";
import {OwnerService} from "../../../service/OwnerService";
import {Animal} from "../../../model/Animal";
import {AnimalService} from "../../../service/AnimalService";

@Component({
  selector: 'app-update-animal-page',
  templateUrl: './update-animal-page.component.html',
  styleUrls: ['./update-animal-page.component.css']
})
export class UpdateAnimalPageComponent implements OnInit {
  animal: Animal = new Animal();

  constructor(
    private ownerService: OwnerService,
    private animalService: AnimalService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var animalId = Number(param.get('animalId'));
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
      this.router.navigate(['owner', 'animalsEdit']);
    });
  }

}
