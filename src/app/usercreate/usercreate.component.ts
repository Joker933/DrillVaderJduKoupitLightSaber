import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.scss']
})
export class UsercreateComponent implements OnInit {

  jmeno = '';
  heslo = '';

  constructor(
      private readonly usersService: UsersService,
      private readonly router: Router
  ) { }

  create(): void {
    this.usersService.create(this.jmeno, this.heslo).subscribe(
        user => this.router.navigateByUrl(`/user/${user.id}`)
    );
  }

  ngOnInit(): void {
  }

}
