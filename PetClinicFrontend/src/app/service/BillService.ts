import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Doctor} from "../model/Doctor";

@Injectable({
  providedIn: 'root'
})

export class BillService {
  baseURL: string = "http://localhost:8080/bill";

  constructor(private httpClient: HttpClient) {
  }

  generateAndSendBill(email: string, id: number) {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    console.log(token)
    return this.httpClient.get(this.baseURL + "?email=" + email + "&id=" + id, {headers: header})
  }
}
