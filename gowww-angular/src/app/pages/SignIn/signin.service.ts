import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SignInService {
  private user = {
    name: '',
    email: ''
  }

  setUser(name: string, email: string) {
    this.user = { name, email };
  }

  getUser() {
    return this.user;
  }
}
