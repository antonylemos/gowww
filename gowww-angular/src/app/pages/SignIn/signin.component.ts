import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

import { SignInService } from './signin.service';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  constructor(public signinService: SignInService) {}

  user = {
    name: '',
    email: ''
  }

  onSubmit() {
    this.signinService.setUser(this.user.name, this.user.email);
  }

  handleUser() {
    console.log(this.signinService.getUser());
  }
}
