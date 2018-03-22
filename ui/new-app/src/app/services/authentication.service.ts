import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { Http } from '@angular/http/src/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

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

    const url = '/api/pull';
    return this.http.get<User[]>(url);

  }

  createUser(user: User): void{
    console.log(user);
    const url = '/api/SignUp';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    console.log(url);
    this.http.post<User>(url, JSON.stringify(user), httpOptions)
      .map(res => console.log(res)).subscribe();
  }

}
