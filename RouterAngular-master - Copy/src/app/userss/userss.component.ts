import { Component, OnInit } from '@angular/core';
import {IUserEntity, UsersService} from '../users.service';

@Component({
  selector: 'app-userss',
  templateUrl: './userss.component.html',
  styleUrls: ['./userss.component.scss']
})
export class UserssComponent implements OnInit {
  users: IUserEntity[] = [];

  constructor(private readonly vypsani: UsersService) {
    vypsani.getAllUsers()
        .subscribe(
            u => this.users = u,
            e => console.error(e)
        );
  }

  ngOnInit() {
  }

}
