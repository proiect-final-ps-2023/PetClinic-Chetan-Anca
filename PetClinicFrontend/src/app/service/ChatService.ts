import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class ChatService {

  baseURL: string = "http://localhost:8080/messages";

  constructor(private httpClient: HttpClient) {
  }

  getMessages() {
    let token = localStorage.getItem("token")
    let header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`)
    return this.httpClient.get<string[]>(this.baseURL, {headers: header})
  }
}





