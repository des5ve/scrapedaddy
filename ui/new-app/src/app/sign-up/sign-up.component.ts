import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;

  // email: FormControl = new FormControl();
  // name: FormControl = new FormControl();
  // username: FormControl =  new FormControl();
  // password: FormControl = new FormControl();
  // password2: FormControl = new FormControl();

  constructor(private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder) 
              { 
                this.createForm();
              }

  ngOnInit() {
  }

  createForm() {

    this.signUpForm = this.formBuilder.group({
      email: '',
      name: '',
      username: '',
      password: '',
      password2: ''
    })

  }

  signup(){

    const signUpModel = this.signUpForm.value;

    const userDetails: User = {
      email:  signUpModel.email as string,
      name: signUpModel.name as string,
      username: signUpModel.username as string,
      password: this.signUpForm.get('password').value,
      password2: this.signUpForm.get('password2').value
    }

    console.log(userDetails);

    this.authenticationService.createUser(userDetails);
    
  }

}
