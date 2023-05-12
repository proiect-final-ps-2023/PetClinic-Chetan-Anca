import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Doctor} from "../model/Doctor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseURL: string = "http://localhost:8080/doctor";

  constructor(private httpClient: HttpClient) {
  }

  getDoctorById(id: number): Observable<Doctor> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Doctor>(this.baseURL + "/findById?id=" + id, {headers: header})
  }

  getDoctorByEmail(email: string): Observable<Doctor> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Doctor>(this.baseURL + "/findByEmail?email=" + email, {headers: header})
  }

  getDoctorsByFirstName(firstName: string): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.baseURL + "/findByFirstName?firstName=" + firstName)
  }

  getDoctorsByLastName(lastName: string): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.baseURL + "/findByLastName?lastName=" + lastName)
  }

  getDoctorByFirstNameAndLastName(firstName: string, lastName: string): Observable<Doctor> {
    return this.httpClient.get<Doctor>(this.baseURL + "/findByFullName?firstName=" + firstName + "&lastName=" + lastName)
  }

  getDoctorByEmailAndPassword(email: string, password: string): Observable<Doctor> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Doctor>(this.baseURL + "/findByCredentials?email=" + email + "&password=" + password, {headers: header})
  }

  getAllDoctors(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(this.baseURL)
  }

  addDoctor(doctor: Doctor): Observable<Doctor> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.post<Doctor>(this.baseURL + "/add", doctor, {headers: header})
  }

  updateDoctor(doctor: Doctor): Observable<Doctor> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.put<Doctor>(this.baseURL + "/update", doctor, {headers: header})
  }

  updatePassword(id: number, password: string): Observable<Doctor> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.put<Doctor>(this.baseURL + "/updatePassword?id=" + id + "&password=" + password, null, {headers: header})
  }

  updateRating(id: number, rate: number): Observable<Doctor> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.put<Doctor>(this.baseURL + "/rating?id=" + id + "&rate=" + rate, null, {headers: header})
  }

  deleteDoctor(id: number) {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.delete(this.baseURL + "/delete?id=" + id, {headers: header})
  }

  saveDoctorToXML(id: number) {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get(this.baseURL + "/xml?id=" + id, {headers: header})
  }
}
