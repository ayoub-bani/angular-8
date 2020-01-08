import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  mySearch: string = "";

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers()
  }
  getAllUsers() {
    this.userService.getUsers().subscribe((res: any[]) => {
      this.users = res;
      console.log(res);

    })
  }

  searchUsers() {
    this.userService.searchUser(this.mySearch).subscribe((res: any[]) => {
      this.users = res['items'];
    })
    this.mySearch = "";
  }


}
