import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUserEntity, UsersService} from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {

  user: IUserEntity;

  constructor(
      private readonly  activatedRoute: ActivatedRoute,
      private readonly  usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
        p => {
          const id = p.get('id');
          const idCislo = parseInt(id, 10);
          this.usersService.getUserById(idCislo).subscribe(
              u => this.user = u,
              e => console.error(e));
        }
    );
  }

}
