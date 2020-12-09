import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {UserRecord} from "./models/user-record";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: UserRecord[] = [
    {
      id: '1111',
      name: 'Neil Peart',
      isAdmin: true
    },
    {
      id: '2222',
      name: 'Geddy Lee',
      isAdmin: false
    },
    {
      id: '3333',
      name: 'Alex Lifeson',
      isAdmin: false
    }
  ];

  constructor() { }

  getUsers(): Observable<UserRecord[]> {
    return of(this.users).pipe(delay(2000));
  }

  deleteUser(id: string): Observable<UserRecord[]> {
    const index = this.users.findIndex(user => user.id === id);
    const updatedUsers = [...this.users];

    updatedUsers.splice(index, 1);
    this.users = updatedUsers;

    return of(updatedUsers);
  }
}
