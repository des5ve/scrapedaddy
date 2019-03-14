import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.css']
})
export class AuthButtonComponent implements OnInit{

  submitted = false;


  //NFL Faves
  teams = ['Giants', 'Falcons', 'Cowboys', 'Eagles'];

  model = new User("des5ve", "Cm14fcfire", "Falcons");

  //Method for Sign Up
  onSubmit(){
    this.submitted = true;
  }
  newUser() {
    this.model = new User('', '', '');
  }
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
