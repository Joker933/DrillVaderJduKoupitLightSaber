import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.scss']
})
export class UsercreateComponent implements OnInit {

  username = '';
  password = '';

  constructor(private readonly userService: UsersService, private router: Router) { }

  ngOnInit(): void { }

  createU(): void{
    this.userService.createUser(this.username, this.password).subscribe(
        user => this.router.navigateByUrl(`/user/${user.id}`)
    );
  }

}
