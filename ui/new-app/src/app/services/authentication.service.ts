import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { Http } from '@angular/http/src/http';

export interface iAuthenticationService{
  getUsers(): Observable<User[]>
  createUser(User): void;
}
@Injectable()
export class AuthenticationService {

  users: User[] = [];

  constructor(private http: Http) { }

  getUsers(): Observable<User[]>{

    //service call to get users

    return Observable.of(this.users);



  }

  createUser(User): void{

    //service call to insert user

  }

}
