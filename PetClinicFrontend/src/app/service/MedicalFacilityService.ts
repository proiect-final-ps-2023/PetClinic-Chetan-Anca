import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MedicalFacility} from "../model/MedicalFacility";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class MedicalFacilityService {
  baseURL: string = "http://localhost:8080/facility";

  constructor(private httpClient: HttpClient) {
  }

  getMedicalFacilityById(id: number): Observable<MedicalFacility> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<MedicalFacility>(this.baseURL + "/findById?id=" + id, {headers: header})
  }

  getMedicalFacilityByName(name: string): Observable<MedicalFacility> {
    return this.httpClient.get<MedicalFacility>(this.baseURL + "/findByName?name=" + name)
  }

  getMedicalFacilityByNameContaining(name: string): Observable<MedicalFacility[]> {
    return this.httpClient.get<MedicalFacility[]>(this.baseURL + "/findByNameContaining?name=" + name)
  }

  getAllMedicalFacilitiesByPrice(price: number): Observable<MedicalFacility[]> {
    return this.httpClient.get<MedicalFacility[]>(this.baseURL + "/findByPrice?price=" + price)
  }

  getAllMedicalFacilities(): Observable<MedicalFacility[]> {
    return this.httpClient.get<MedicalFacility[]>(this.baseURL)
  }

  addMedicalFacility(medicalFacility: MedicalFacility): Observable<MedicalFacility> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.post<MedicalFacility>(this.baseURL + "/add", medicalFacility, {headers: header})
  }

  updateMedicalFacility(medicalFacility: MedicalFacility): Observable<MedicalFacility> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.put<MedicalFacility>(this.baseURL + "/update", medicalFacility, {headers: header})
  }

  deleteMedicalFacility(id: number) {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.delete(this.baseURL + "/delete?id=" + id, {headers: header})
  }


}
