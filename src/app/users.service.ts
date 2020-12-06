
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';


export interface IUserEntity {
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private id = 0;
  private users: IUserEntity[] = [];

  constructor() { }

  getAllUsers(): Observable<IUserEntity[]> {
    return of(this.users);
  }

  createUser(noveJmeno: string, noveHeslo: string): Observable<IUserEntity> {

    const novejUzivatel: IUserEntity = {id: this.id, username: noveJmeno, password: noveHeslo};
    if (this.users.find(u => u.username === noveJmeno)) {
      console.log("Tento Uzivatel jiz Existuje Bratre");
    } else {
      this.id = this.id + 1;
      this.users.push(novejUzivatel);
      console.log(novejUzivatel);
      return of(novejUzivatel);
    }
  }

  getUserById(idNumber: number): Observable<IUserEntity> {
    return of(this.users.find(u => u.id === this.id));

  }

}
