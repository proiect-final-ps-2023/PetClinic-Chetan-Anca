import {Owner} from "./Owner";
import {AnimalType} from "./AnimalType";

export class Animal {
  animalId: number | undefined;
  name: string | undefined;
  owner: Owner | undefined;
  type: AnimalType | undefined;
  breed: string | undefined;
  age: number | undefined;
  weight: number | undefined;
}
