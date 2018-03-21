import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  email: FormControl = new FormControl();
  name: FormControl = new FormControl();
  username: FormControl =  new FormControl();
  password: FormControl = new FormControl();
  password2: FormControl = new FormControl();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  signup(){

    const userDetails: User = {
      email:  this.email.value,
      name: this.name.value,
      username: this.username.value,
      password: this.password.value,
      password2: this.password.value
    }

    console.log(userDetails);

    this.authenticationService.createUser(userDetails);
    
  }

}
