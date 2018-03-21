import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { Http } from '@angular/http/src/http';
import { HttpClient } from '@angular/common/http';

export interface iAuthenticationService{
  getUsers(): Observable<User[]>
  createUser(user: User): void;
}
@Injectable()
export class AuthenticationService {

  users: User[] = [];
  returnedUser: User;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{

    //service call to get users

    return Observable.of(this.users);



  }

  createUser(user: User): void{
    console.log(user);
    const url = 'http://localhost:3000/api/SignUp';
    this.http.post(url, user);
  }

}
