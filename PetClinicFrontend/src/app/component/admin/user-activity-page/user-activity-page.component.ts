import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {User} from "../../../model/User";
import {UserService} from "../../../service/UserService";

@Component({
  selector: 'app-user-activity-page',
  templateUrl: './user-activity-page.component.html',
  styleUrls: ['./user-activity-page.component.css']
})
export class UserActivityPageComponent implements OnInit, OnChanges {
  userList: User[] = [];
  displayedColumns: string[] = ['ID', 'Email', 'Password', 'UserType', 'Logged', 'Last logged in', 'Last logged out']


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data) => {
        this.userList = data
        console.log(this.userList)
      },
      (_error) => {
        alert("No users available now")
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.userService.getAllUsers().subscribe((data) => {
        console.log(data)
        this.userList = data
      },
      (_error) => {
        alert("No users available now")
      });
  }

}
