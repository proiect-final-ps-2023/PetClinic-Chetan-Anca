import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "../model/User";
import {UserType} from "../model/UserType";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:8080/user";

  constructor(private httpClient: HttpClient) {
  }

  getUserById(id: number): Observable<User> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<User>(this.baseURL + "/findById?id=" + id, {headers: header});
  }

  getUserByEmailAndPassword(email: string, password: string): Observable<User> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<User>(this.baseURL + "/findByCredentials?email=" + email + "&password=" + password, {headers: header})
  }

  getAllUsersByUserType(userType: UserType): Observable<User[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<User[]>(this.baseURL + "/findAllByUserType?userType=" + userType, {headers: header})
  }

  getAllUsers(): Observable<User[]> {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<User[]>(this.baseURL, {headers: header})
  }

  forgotPassword(email: string) {
    return this.httpClient.put<string>(this.baseURL + "/forgotPassword?email=" + email, null)
  }

  logout(id: number) {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.put(this.baseURL + "/logout?id=" + id, null, {headers: header})
  }
}
