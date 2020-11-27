import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  user = {
    name: '',
    email: ''
  }

  onSubmit() {
    console.log(this.user)
  }
}
