import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: FormControl = new FormControl();
  firstName: FormControl = new FormControl();
  lastName: FormControl = new FormControl();
  username: FormControl =  new FormControl();
  password: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  signup(){
    const userDetails: User = {
      email:  this.email.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      username: this.username.value,
      password: this.password.value
    }
    
    console.log(userDetails);
    
  }

}
