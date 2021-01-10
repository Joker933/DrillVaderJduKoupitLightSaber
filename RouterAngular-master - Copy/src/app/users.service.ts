
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';


export interface IUserEntity {
  id: number;
  jmeno: string;
  heslo: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private id = 1;
  private users: IUserEntity[] = [
    {id: 3, jmeno: 'ChuraqVojta', heslo: 'Churaq'}
  ];

  constructor() {
  }

  getAllUsers(): Observable<IUserEntity[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<IUserEntity> {
    let user: IUserEntity;
    for (const u of this.users) {
      if (id === u.id) {
        user = u;
        break;
      }
    }
    return of(user);
  }

  create(newjmeno: string, newheslo: string): Observable<IUserEntity> {
    const newUser: IUserEntity = {id: this.id++, jmeno: newjmeno, heslo: newheslo};
    this.users.push(newUser);
    return of(newUser);
  }


  edit(id: number, jmeno: string): Observable<IUserEntity> {
    for (const u of this.users) {
      if (u.id === id) {
        u.jmeno = jmeno
        return of(u);
      }
    }
    return of(null);
  }
}
