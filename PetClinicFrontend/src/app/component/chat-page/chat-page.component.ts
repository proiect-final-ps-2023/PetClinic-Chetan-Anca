import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WebSocketAPI} from "./WebSocketAPI";
import {ChatService} from "../../service/ChatService";
import jwtDecode from "jwt-decode";
import {UserType} from "../../model/UserType";
import {Observable, of, subscribeOn, tap} from "rxjs";
import * as stream from "stream";

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatPageComponent implements OnInit {

  token: any
  title = 'angular8-springboot-websocket';
  webSocketAPI: WebSocketAPI | any;
  messages: string[] = []
  name: string = "";

  isAdmin: boolean = false

  constructor(private chatService: ChatService, private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(new ChatPageComponent(this.chatService, this.changeDetectorRef));
    this.token = localStorage.getItem('token')
    let tokenDecoded: any
    tokenDecoded = jwtDecode(this.token)
    const userType = tokenDecoded.userType;

    if (userType == UserType.ADMIN) {
      this.isAdmin = true
    } else {
      this.isAdmin = false
    }
  }

  connect() {
    this.webSocketAPI._connect();
  }

  disconnect() {
    this.webSocketAPI._disconnect();
  }

  sendMessage() {
    this.webSocketAPI._send(this.name);
  }

  handleMessage(message: string) {

  }

  showMessages() {
    this.chatService.getMessages().subscribe((res: string[]) => {
      this.messages = [...res]
    })
  }
}
