import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUserEntity, UsersService} from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {

    user: IUserEntity;
    jmeno = '';


    constructor(
        private readonly  activatedRoute: ActivatedRoute,
        private readonly  usersService: UsersService,
        private readonly router: Router
    ) { }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(p => {
            const id: string = p.get('id'); // '1'
            const idNum = parseInt(id, 10);
            this.usersService.getUserById(idNum)
                .subscribe(
                    (u: IUserEntity) => {
                        if (u) {
                            this.user = u;
                            this.jmeno = u.jmeno;
                        } else {
                            this.router.navigateByUrl('/users');
                        }
                    },
                    e => {
                        console.error(e);
                    }
                );
        });
    }

    edit() {
        this.usersService.edit(this.user.id, this.jmeno)
            .subscribe((u: IUserEntity)=>{
                this.user = u;
                this.jmeno = u.jmeno;
            })


    }

}
