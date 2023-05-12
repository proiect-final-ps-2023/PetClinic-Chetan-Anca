import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  baseURL: string = "http://localhost:8080/auth";

  constructor(private httpClient: HttpClient) {
  }

  registerAdmin(user: any) {
    return this.httpClient.post(this.baseURL + "/registerAdmin", user);
  }

  registerDoctor(doctor: any) {
    return this.httpClient.post(this.baseURL + "/registerDoctor", doctor);
  }

  registerOwner(owner: any) {
    return this.httpClient.post(this.baseURL + "/registerOwner", owner);
  }

  login(email: any, password: any) {
    const body = JSON.stringify({
        email: email,
        password: password
      }
    )
    return this.httpClient.post(this.baseURL + "/login", body, {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  verify(email: any) {
    return this.httpClient.get<number>(this.baseURL + "/verify?email=" + email)
  }

}

