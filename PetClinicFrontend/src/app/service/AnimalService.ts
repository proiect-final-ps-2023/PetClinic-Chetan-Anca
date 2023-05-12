import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Animal} from "../model/Animal";
import {AnimalType} from "../model/AnimalType";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  baseURL: string = "http://localhost:8080/animal";

  constructor(private httpClient: HttpClient) {
  }

  getAnimalById(id: number): Observable<Animal> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Animal>(this.baseURL + "/findById?id=" + id, {headers: header})
  }

  getAllAnimalsByName(name: string): Observable<Animal[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Animal[]>(this.baseURL + "/findByName?name=" + name, {headers: header})
  }

  getAllAnimalsByOwnerId(id: number | undefined): Observable<Animal[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Animal[]>(this.baseURL + "/findByOwner?id=" + id, {headers: header});
  }

  getAllAnimalsByType(animalType: AnimalType): Observable<Animal[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Animal[]>(this.baseURL + "/findByType?type=" + animalType, {headers: header})
  }

  getAllAnimalsByAgeGraterThan(age: number): Observable<Animal[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Animal[]>(this.baseURL + "/findByAgeGrater?age=" + age, {headers: header})

  }

  getAllByWeightLessThan(weight: number): Observable<Animal[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Animal[]>(this.baseURL + "/findByWeightLess?weight=" + weight, {headers: header})
  }

  getAllAnimals(): Observable<Animal[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Animal[]>(this.baseURL, {headers: header})
  }

  addAnimal(animal: Animal): Observable<Animal> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.post<Animal>(this.baseURL + "/add", animal, {headers: header})
  }

  updateAnimal(animal: Animal): Observable<Animal> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.put<Animal>(this.baseURL + "/update", animal, {headers: header})
  }

  deleteAnimal(id: number) {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.delete(this.baseURL + "/delete?id=" + id, {headers: header})
  }

  saveAnimalToXML(id: number) {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get(this.baseURL + "/xml?id=" + id, {headers: header})
  }

}
