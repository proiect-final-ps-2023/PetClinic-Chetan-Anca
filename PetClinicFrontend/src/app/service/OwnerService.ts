import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Owner} from "../model/Owner";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  baseURL: string = "http://localhost:8080/owner";

  constructor(private httpClient: HttpClient) {
  }

  getOwnerById(id: number): Observable<Owner> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Owner>(this.baseURL + "/findById?id=" + id, {headers: header})
  }

  getOwnerByEmail(email: string): Observable<Owner> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Owner>(this.baseURL + "/findByEmail?email=" + email, {headers: header})
  }

  getOwnerByFirstNameAndLastName(firstName: string, lastName: string): Observable<Owner> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Owner>(this.baseURL + "/findByFullName?firstName=" + firstName + "&lastName=" + lastName, {headers: header})
  }

  getAllOwnersByFirstName(firstName: string): Observable<Owner[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Owner[]>(this.baseURL + "/findByFirstName?firstName=" + firstName, {headers: header})

  }

  getAllOwnersByLastName(lastName: string): Observable<Owner[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Owner[]>(this.baseURL + "/findByLastName?lastName=" + lastName, {headers: header})

  }

  getOwnerByEmailAndPassword(email: string, password: string): Observable<Owner> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Owner>(this.baseURL + "/findByCredentials?email=" + email + "&password=" + password, {headers: header})
  }

  getAllOwners(): Observable<Owner[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<Owner[]>(this.baseURL, {headers: header})
  }

  addOwner(owner: Owner): Observable<Owner> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.post<Owner>(this.baseURL + "/add", owner, {headers: header})
  }

  updateOwner(owner: Owner): Observable<Owner> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.put<Owner>(this.baseURL + "/update", owner, {headers: header})
  }

  updatePassword(id: number, password: string): Observable<Owner> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.put<Owner>(this.baseURL + "/updatePassword?id=" + id + "&password=" + password, null, {headers: header})
  }

  deleteOwner(id: number) {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.delete(this.baseURL + "/delete?id=" + id, {headers: header})
  }

  saveOwnerToXML(id: number) {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get(this.baseURL + "/xml?id=" + id, {headers: header})
  }
}
